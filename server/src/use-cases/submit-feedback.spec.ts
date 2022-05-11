import { SubmitFeedback } from "./submit-feedback";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedback(
  {create: createFeedbackSpy},
  { sendMail: sendMailSpy}
  )

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () =>{
   await expect(submitFeedback.execute({
      type: 'bug',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,3213adas'

    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();

  });
});

it('should not be able to submit feedback without type', async () =>{
  await expect(submitFeedback.execute({
     type: '',
     comment: 'example comment',
     screenshot: 'data:image/png;base64,812sdaadad'

   })).rejects.toThrow();
  });
   it('should not be able to submit feedback without comment', async () =>{
    await expect(submitFeedback.execute({
       type: 'bug',
       comment: '',
       screenshot: 'data:image/png;base64,812sdaadad'
  
     })).rejects.toThrow();

 });

 it('should not be able to submit feedback with an invalid screenshot', async () =>{
  await expect(submitFeedback.execute({
     type: 'bug',
     comment: 'idk',
     screenshot: 'test.jpg'

   })).rejects.toThrow();

});




// testar o conteudo da função
