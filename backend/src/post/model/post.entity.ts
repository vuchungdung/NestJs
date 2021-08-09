import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Posts')
export class PostEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: ''})
  body: string;

  @Column({type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
  createdAt: Date;
}