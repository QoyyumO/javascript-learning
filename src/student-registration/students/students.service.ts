import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createStudentDto: CreateStudentDto) {
    const newStudent = this.studentRepository.create(createStudentDto);
    if (createStudentDto.user) {
      const newUser = this.userRepository.create(createStudentDto.user);
      const user: User = await this.userRepository.save(newUser);
      newStudent.user = user;
    }
    return this.studentRepository.save(newStudent);
  }

  async findAll() {
    return await this.studentRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    if (isNaN(id)) {
      throw new HttpException('Invalid student ID', HttpStatus.BAD_REQUEST);
    }
    const student = await this.studentRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    if (isNaN(id)) {
      throw new HttpException('Invalid student ID', HttpStatus.BAD_REQUEST);
    }
    const result = await this.studentRepository.update(id, updateStudentDto);
    if (result.affected === 0) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    if (isNaN(id)) {
      throw new HttpException('Invalid student ID', HttpStatus.BAD_REQUEST);
    }
    const result = await this.studentRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Student removed successfully' };
  }

  /* Work on relationships */
  async setUserById(studentId: number, userId: number) {
    if (isNaN(studentId) || isNaN(userId)) {
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    }
    try {
      return await this.studentRepository.createQueryBuilder()
        .relation(Student, "user")
        .of(studentId)
        .set(userId);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(studentId: number) {
    if (isNaN(studentId)) {
      throw new HttpException('Invalid student ID', HttpStatus.BAD_REQUEST);
    }
    try {
      return await this.studentRepository.createQueryBuilder()
        .relation(Student, "user")
        .of(studentId)
        .set(null);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
