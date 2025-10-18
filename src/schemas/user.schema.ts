import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  age: number;

  @Prop({ default: false })
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Add soft delete plugin
UserSchema.pre('find', function() {
  this.where({ isDeleted: false });
});

UserSchema.pre('findOne', function() {
  this.where({ isDeleted: false });
});

UserSchema.pre('countDocuments', function() {
  this.where({ isDeleted: false });
});
