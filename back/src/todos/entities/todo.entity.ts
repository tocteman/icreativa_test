import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({default: true})
  active: boolean;

  @Column({default: false})
  completed: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(-5)' })
  createdAt: Date;

  @UpdateDateColumn({type: 'timestamptz', nullable: true, default: () => null, onUpdate: 'CURRENT_TIMESTAMP(-5)'})
  updated_at: Date;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: Date;
}
