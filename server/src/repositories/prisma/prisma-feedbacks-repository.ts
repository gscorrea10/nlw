import { FeedbackCreateData, FeedbacksRepository} from "../feedbacks-repositorie";
import { prisma } from "../../prisma"
export class PrismaFeedbacksRepository implements PrismaFeedbacksRepository{
  async create({type, comment, screenshot}: FeedbackCreateData){
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })

  }
  
}