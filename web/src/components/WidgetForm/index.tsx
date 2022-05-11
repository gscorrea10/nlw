import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import otherImageUrl from '../../assets/other.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Bug',
        image: {
            source: bugImageUrl,
            alt: 'imagem que remete bug/problema',
        }
    },

    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de duvida',
        }
    },

    OTHER: {
        title: 'Other',
        image: {
            source: otherImageUrl,
            alt: 'imagem de caneta e papel',
        }
    },

};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setfeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setfeedbackSent(false);
        setfeedbackType(null);
    }


    return (
        <div className=" bg-zing-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg 
        w-[calc(100vw-2rem)]md:w-auto">

           

            { feedbackSent ?(
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType}/>

            
            ) : (
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setfeedbackSent(true)}
                />
            )}
                </>
            )}

            

                <footer className="text-xs text-neutral-400">
                by <a className="underline underline-offset-2" href="https://www.linkedin.com/in/gscorrea"
                    target="_blank">Gabriel Corrêa</a>
                </footer>
            
          



        </div>

    );
            
}