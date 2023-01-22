import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({default: false})
  active: boolean;

  @Column({default: false})
  completed: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({type: 'timestamptz', nullable: true, default: null, onUpdate: 'CURRENT_TIMESTAMP(-5)'})
  updated_at: Date;
}
