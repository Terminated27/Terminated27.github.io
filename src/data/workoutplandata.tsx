import { THEME } from '../theme';
import { Link } from 'react-router-dom';
export const workoutlanding = [
  { 
    id: 'intro', 
    title: 'Introduction', 
    content: [
      "Why should you trust me? I don't really think you should, I am just an engineering student using this as an opportunity to learn web development. However, I have spent countless hours learning about the gym. I have used this exact method in my journey to gain muscle mass and lose weight. Since the beginning of my gym journey, I have lost 50 lbs and have seen significant gains in my strength. I have also been asked by enough people to warrant me creating something to send out instead of having multiple of the same text chain. Hopefully this program works as good for you as it has done for me.",
      "I dont know if I need to mention this, but I am NOT a health specialist and nothing you read here should be taken as fact, it is just a result of my learning online. Whatever you do with this guide is your own problem. Please consult a health professional before starting any new workout or diet plan.",
    ]
  },
  {
    id: "goals",
    title: "Goals & Methodology",
    content: [
      "It is important to have a goal when going to the gym. My goal is to increase my real world strength & minimizing injury, this means I focus on weightlifting, and when choosing an exercise I will emphasize RPE and compound real life adjacent lifts. This will help in situations like moving furniture or even just lugging around groceries from your car.",
      "Something to keep in mind that the best training plan is one that you personally think is fun and has you wanting to pursue fitness. As a result this is a more personalizable routine and outlines how far you should push these exercises to avoid injury and overall provide more context for your time in the gym. A plan doesn't matter if you never go to the gym in the first place, so the main focus here should be enjoyment.",
      "For beginners who don't have a background in the gym, I provide some information for your benefit in the following sections.",
      "Otherwise you are more than welcome to skip ahead to the split builder",
      <Link 
        to="/workoutlanding/workoutplan/splitbuilder" 
        className={`${THEME.accent} hover:opacity-80 ${THEME.base}/20 border border-app-accent text-app-text-main font-bold py-3 px-8 rounded-full transition-all`}
      >
        To Split Builder
      </Link>
    ]
  },
  {
    id: 'glossary',
    title: 'Glossary',
    content: [
      <>
        There are a lot of weird and specific words that are used in the gym that it's important to understand to enter the fitness conversation, these exist already in the form of large lists such as the <a href="https://www.underarmour.com/en-us/t/playbooks/training/gym-terms-glossary/" target="_blank" className="text-app-accent underline decoration-app-accent/30 hover:decoration-app-accent transition-all">Under Armour Glossary</a>, 
        But sometimes it's an information overload so I will provide a curated list of ones I use (they are not all used in this program):
      </>,
      <>
        <h4 className="text-app-accent font-bold mb-2 mt-4">Basics</h4>
        <ul className="space-y-2 list-none">
          <li><strong>Set</strong> — 1 complete set of reps (often 2-4 sets per exercise)</li>
          <li><strong>Rep</strong> — Repetition; the amount of times you complete the movement in a set</li>
          <li><strong>Rest Interval</strong> — The amount of time spent between sets</li>
          <li><strong>Superset</strong> — Doing multiple workouts back-to-back without rest</li>
          <li><strong>Dropset</strong> — On the final set, progressively lower weight every few reps until completion</li>
          <li><strong>Working Set</strong> — The part of the set where you are working at the target intensity</li>
        </ul>
      </>,
      <>
        <h4 className="text-app-accent font-bold mb-2 mt-4">Form</h4>
        <ul className="space-y-2 list-none">
          <li><strong>RIR</strong> — Reps in Reserve; how many more reps you could still do in the set</li>
          <li><strong>Technical Failure</strong> — The point where you can no longer complete a rep in acceptable form</li>
          <li><strong>Concentric</strong> — Shortening of the muscle during the exercise</li>
          <li><strong>Eccentric</strong> — Extension/lengthening of the muscle during the exercise</li>
          <li><strong>Compound</strong> — A workout that trains multiple muscles at the same time</li>
          <li><strong>Isolation</strong> — A workout that targets one muscle at a time</li>
        </ul>
      </>,
      <>
        <h4 className="text-app-accent font-bold mb-2 mt-4">Gym Lingo</h4>
        <ul className="space-y-2 list-none">
          <li><strong>1RM</strong> — 1 Rep Max; absolute max weight you can move once</li>
          <li><strong>PR</strong> — Personal Record; your all-time heaviest lift</li>
          <li><strong>Gains</strong> — Muscle growth/hypertrophy</li>
          <li><strong>Pump</strong> — Temporary muscle fullness and tightness after a workout</li>
        </ul>
      </>,
      <>
        <p className="italic opacity-70 mt-4">
          Note: <strong>RPE</strong> and <strong>Mind-Muscle Connection</strong> are discussed in detail in their own sections below.
        </p>
      </>
    ]
  },
  {
    id: 'cardio',
    title: 'Cardio',
    content: [
      "This is really the most important step for health, as a healthy heart is crucial. If you can't workout, fitting in a cardio day is great too.",
      "I have a relaxed cardio regime for my goal of real world health but the most important thing to remember here, and I can't drive this home enough, is to have fun while moving. Just like everything else, consistency is key and having fun is the best way to reach that. To avoid steering you away from that I will just present what I do and why, and let you form what you want to do. Examples of cardio are all over your life, the commute to school on a bike, the walk up and down the stairs, taking the dog on a walk, etc. It's best to not overcomplicate this. Just remember 1 thing, if you want to focus on cardiac health do cardio first, if you want to focus on muscular gain, do cardio after weightlifting.",
      "For me, I like something very structured and easy to do everyday so I don't need to put any mental effort in. I do a 10 - 30 minute walk on the treadmill, starting at 2.5 mph and increasing incline and speed to where I can maintain a moderate heart rate (there are calculations and stuff you can find for that but a good rule of thumb is if you are able to keep a conversation without running out of breath). The reason I do this specifically is that walking is low impact (good for joints and knees) and a moderate heart rate promotes good cardiac health without straining too hard and impacting the next day."
    ]
  },
  {
    id: 'rest',
    title: 'Rest',
    content: [
      "It is impossible to go to the gym and not hear the words “rest day”. For those who love going everyday this is a sad truth that we must come to terms with. A responsible regiment will always include 2 or more rest days a week to minimize injury and maximize power on those precious gym days. People will often recommend 1 day rest for a 6 day split, but that moves focus away from avoiding injury to the best of our abilities.",
      "These days are gold for your muscles as this is where they are recuperating and gaining that strength that we want. You might be thinking that if you just rest the tired muscles and in the meantime workout the others, it will be just fine. Unfortunately you will find yourself mistaken. As you workout, it is not just taxing your muscles but also your joints, connective tissue, mind and even more, that's why you must remember it is important to rest your whole body at once for at least 2 days a week.",
      "This rest doesn't need to just be chilling on the couch though. I, and many others also recommend active recovery, meaning you should also try to fit in some light cardio such as walking or swimming on these days, just to get the blood flowing and maximize recovery. By light, I mean it. The difficulty here should be a step below the regular cardio."
    ]
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    content: [
      "Nutrition is just as important as going to the gym and doing cardio, as the famous saying goes; you can't outrun a bad diet. Basically meaning if you want a toned physique then you need to pay attention here.",
      "There are a few different tracks to take here depending on what you want: weight loss, maintenance, or strength gain. These are focuses but these are all pretty much the same underneath. The core ideology across all of these is just to get enough protein & creatine for your gym performance and try to squash the myths around nutrition. Start by reading the weight loss section as the others build off of that.",
      "Before we get into each plan there are some major myths that we need to forget."
    ]
  },
  {
    id: 'myths',
    title: 'Myths',
    content: [
      <><strong>Protein window:</strong> Many people in the past and today think that there is a window after working out that you should be eating, but there is no science to back this up, just eat whenever you want in the day.</>,
      <><strong>Evil Carbs:</strong> This is a big one. Completely disregard the idea that carbs are bad, they are actually good. This is because carbs are where a lot of your energy comes from, think of it like the fuel to your body.</>,
      <><strong>Fad Diets:</strong> There are loads of fad diets from keto, extreme calorie restriction, paleo, gluten free etc. if you don't have a real reason to do these such as health reasons, then steer clear as they are useless for 99% of the population.</>,
      <><strong>Frequent meals:</strong> some people believe that you should have many small meals to keep your blood glucose higher all day long but this has been disproven as helpful and could even be detrimental.</>,
      <><strong>Detox:</strong> Think Juice cleanses, special teas, etc. these might seem amazing but they really are too good to be true. In reality you have 2 kidneys and a liver operating at the strength of high tech medical devices that will outperform these 100% of the time, sometimes these juice cleanses actually do more harm than good. If you ever used one I can bet with very high certainty the weight you lost was all water weight or from unhealthy bowel movements.</>,
      <><strong>Creatine:</strong> This is something many people are afraid of as a “steroid” but it's actually in lots of food you already eat and most people actually don't get the daily recommended amount by the International Society of Sports Nutrition (ISSN). I highly, highly recommend creatine as it has been shown to have vast benefits for a very wide range of things; sleep, gym performance, bed performance 😉, mood support, brain health, even to periods and hormone regulation. The one I use and trust is nutricost creatine monohydrate</>
    ]
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    content: [
      "This is just going to touch on the tip of the iceberg as weight loss is a huge area of health in and of itself, but in the context of this guide I will just lay out my methodology. I used this exact method to lose 50 lbs in 1 year. My goal here is to make it as broad and easy to follow as possible. Just like before, the easier the better, this is so you can follow it everyday until your goal. I very strongly recommend setting a target weight, but not a target date. This is because weight loss is far from linear and some weeks you might even see your weight go up but please don't let it discourage you, this is all part of the process.",
      "Starting out I wouldn't even want you to change your diet. Instead, meticulously track your calories for 2 weeks (everything counts, even drinks!) to get an idea of what you eat each week. Meanwhile I also want you to weigh yourself everyday at the same time (morning or night ideally). Then determine if you are losing weight already, maintaining weight, or gaining. Your target here will be around 1-2 lbs per week of weight loss, any faster and you risk having health complications or rebounding back to your starting weight after the diet.",
      "Take the amount your weight changed (or if it stayed the same) and modify your calories by +500 or -500 a day to increase or decrease the weekly change by 1 lb either direction. Remember, losing 1-2 lbs a week is the target.",
      <>If you don't want to do that, you can get a generalized number using this <a href="/workoutlanding/caloriecalculator" target="_blank" className="text-app-accent underline decoration-app-accent/30">calorie calculator</a>, enter your stuff, and just follow the decrease in calories each day.</>,
      <>Remember to get enough protein each week as well, depending on your weight this target will change so I will just link to a <a href="/workoutlanding/proteincalculator" target="_blank" className="text-app-accent underline decoration-app-accent/30">protein calculator</a>, this is easy if you use imperial as I recommend 1g/lb body weight for protein intake.</>,
      "Make sure to also include 5g of creatine a day"
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    content: [
      "This one is the easiest, if you follow paragraphs 2 - 4 of the weight loss guide and determine that you aren't changing weight then the only thing I want you to focus on is getting enough protein and having 5g of creatine a day. Otherwise modify your diet to maintain weight."
    ]
  },
  {
    id: 'strength-gain',
    title: 'Strength Gain',
    content: [
      "This one is slightly the opposite of weight loss. If you are prioritizing muscle gain and are already lean (10-15% body fat for men and 18-24% for women) then a way to slightly speed up muscle growth is to gain a little bit of weight each week to give your body the flexibility to create new muscle. I recommend gaining about .5 - 1 lbs a week during this as any more is just going to be weight you need to trim off again. Follow the guide for weight loss just with a target to about +.5 - 1lb a week.",
      "Protein wise here, recent studies suggest having an intake slightly above maintenance so take a higher end amount from the calculator",
      "Remember, you must also be hitting your protein target and 5g of creatine a day"
    ]
  },
  {
    id: 'stretch',
    title: 'Stretch',
    content: [
      "I do think that you should be stretching each day in the gym but only at the end, you don't want to be over stretched before doing weightlifting, it actually increases your chance of injury. For me I usually just stretch my legs as I have hypermobility and physically can't get any more flexible up top. I usually do regular stretches with some yoga peppered in because it's fun. This is also very up for experimentation and find out what your body wants stretched each day. I also recommend to do this on your off days",
      <><h4 className="text-app-accent font-bold mb-2">What I do:</h4>I usually end a workout with a stretch that consists of different types of toe touches, and hip mobility drills. To avoid any more of me rambling on, I suggest doing your own research here. Just remember that static stretches should only be done post movement. Also don't push these too hard, it should be a “hurts so good” instead of “hurts so bad”.</>
    ]
  },
  {
    id: 'injury',
    title: 'Injury',
    content: [
      "Hopefully with this guide you will never need to use this section and always follow the advice of a doctor, but when injured don't be afraid to take plenty of time off for that muscle so as to not impede the recovery time. A great thing about the gym is that it's always there for you, and any muscle lost is much, much faster to come back. Putting the pen down does not mean the story is over. Sometimes easing back in helps as well but please remember take it very slow in the beginning (50% effort)",
      "There are also some studies that suggest if you hurt your right side, training your left and vice versa can help in recovery. Do with that as you will."
    ]
  },
  {
    id: 'warm-up',
    title: 'Warm Up',
    content: [
      "Skip this step if you are doing cardio first",
      "This part is really simple but we cannot skip this before getting into the weightlifting part (the best part). I and many others have found that when moving weights in the gym, it is important to get your blood flowing and ease into it. I do a very light walk on the treadmill for 5 minutes but again, just do what you enjoy most for this step, it could be the walk to the gym, or a bike ride or anything. One thing to remember is that this should be really light as not to eat into your energy for weightlifting, this part works in conjunction with the first sets I mention later on in the Weight Changes section."
    ]
  },
  {
    id: 'rpe',
    title: 'RPE',
    content: [
      "Now we can get into the nitty gritty of weightlifting :). Because RPE is a very vague concept, beginners very often have trouble getting it right. In this section I will try to explain how to gauge RPE so you can reap the benefits of this technique.",
      "RPE distilled down is -as I mentioned before- is Rate of Perceived Exertion on a scale of 0-10, meaning that instead of focusing on weight, we instead focus on how difficult the workout feels. There is a distinction between effort and discomfort here, we are maximizing effort and minimizing discomfort (a burning or sharp pain is different from not being able to push anymore). This has some advantages over listing weights, as people are not in the same condition every day or even month to month, so sometimes a workout will feel easier on a good day and harder on a bad one.",
      "An issue with this technique is that beginners often overestimate the RPE, meaning that a perceived 8 might actually be RPE 5, this is something you will inevitably get better with at times if you focus on pushing yourself, and experimenting. To “Calibrate” yourself, I would recommend doing a safe exercise such as a bicep curl or a machine press that you won't hurt yourself with, and take that to complete failure in an estimated 8-12 rep range to where you absolutely cannot do another set no matter what (RPE 10). This will give you a relative reference point.",
      "Here is a handy cheat sheet for reference that lists out each RPE level.",
    ]
  },
  {
    id: 'weight-changes',
    title: 'Weight Changes',
    content: [
      <><h4 className="text-app-accent font-bold mb-2">Form Focus vs Weight Maxxing</h4>This is still a contentious topic in the bodybuilding world, but in the context of maintaining physical health and avoiding injury while still making gains, the modern consensus is that the best way to end most sets is to technical failure, the point where your form starts to degrade but is not totally lost. This way we can avoid injury and still push ourselves.</>,
      "Another way to ensure that I reach failure consistently is to change the weight from set to set. For warming up the muscle (first exercise for that muscle) I'll start with relatively low weight (at a very easy weight) and do it for anywhere from 10-25 reps but this should be really easy. For the following sets, I'll jump up to a weight that I think is about the RPE range I want to be in, and move the weight around accordingly. Recent studies show that starting heavy for your first working set and tapering down is good, but the benefit we are talking about here is just a few percentage points."
    ]
  },
  {
    id: 'mind-muscle',
    title: 'Mind Muscle Connection',
    content: [
      "Mind muscle connection is often overlooked by beginners, and even though the brain isn’t a muscle, it still must be treated as such because it is the engine that drives our power output. The strength of your brain signals to your muscles will increase and thus increase the weight you can put up. To start training this you will also have to have a basic understanding of the muscles, joints, and your own body. Don't worry, just like everything else, it's a journey you need to enjoy, and the knowledge will come naturally. There are 2 main techniques that I use: Cues and Connection. For Isolation exercises I like to use Connection, this is to focus on muscle activation, sometimes it helps to put your hand on the muscle you are training and feel the muscle contract and lengthen. For Compound exercises I switch to Cues, this is when you focus on an action as you can't focus on that many muscles at once. An example of a cue is pushing the floor away in a squat. I will advise which one you should use when it's relevant.",
      "There is a lot of visualization and focus involved in this step so it takes time to get it right. Hopefully, like me, you will find this to be an almost meditative state and one of the best parts of the gym.",
      "Just like any other muscle, the brain (not actually a muscle) must have rest days even when you feel your body is in prime condition, and you’ll find when overtraining your progression might slow down. Experts recommend 1-2 days of rest a week, but through experimentation you will find your own sweet spot"
    ]
  },
{
    id: 'training-methodology',
    title: 'Training Methodology',
    content: [
      <>There are 6 real life movement patterns that you would realistically use day to day. Those are:<br/><br/>
      The Squat Pattern (Quads/Glutes)<br/>
      The Hinge Pattern (Hamstrings/Lower Back/Glutes)<br/>
      The Push Pattern (Chest/Shoulders/Triceps)<br/>
      The Pull Pattern (Back/Biceps)<br/>
      The Carry/Core Pattern (Abdominals/Grip/Stability)<br/>
      The Accessories (Biceps, Triceps, Calves, Side Delts)</>,
      "Right now as a beginner you don't need to know much beyond that they exist, and as you build familiarity you will learn to understand them intuitively. Each split will have about 6 exercises per session taking hopefully less than an hour to complete the lifting portion. A good tip is to also have a main lift for 4 of the muscle groups (squat, hinge, push, pull).",
      "For those 2 exercises that aren't in the main 4 (carry, accessories), those are slotted in at will as they are better trained 2x as often as the other bigger muscles. Also a lot of workouts put immense strain on your bones, joints etc. so don't do more than 2 heavy weight compound lifts each session and don't do them back to back. A heavyweight exercise would be something like a deadlift, which puts lots of strain on your back.",
      "My core routine is just as easy as everything else but are actually more for looks as compound lifts train my abs sufficiently. it consists of 2 movements, leg raises and weighted crunches. That's it. You can find different variations of those same lifts and achieve the same thing",
      <><strong>The 4-Step Session:</strong><br/>
      <strong>Step 1:</strong> warm-up (If you are doing cardio first then cardio will be your warm-up. Otherwise refer to warm up section)<br/>
      <strong>Step 2:</strong> main lifting<br/>
      <strong>Step 3:</strong> Cardio (Skip this if doing first)<br/>
      <strong>Step 4:</strong> Stretch</>,
      "To begin each workout day you will want to have some food in your system but at least like 30 minutes of digestion time"
    ]
  },
  {
    id: 'choosing-your-split',
    title: 'Choosing Your Split',
    content: [
      "Like all things training, there are levels to this. Fortunately, you don't need to ever stick to 1 or even pay much mind to the difficulty levels. There are some elite athletes using beginner difficulty splits and every level in between. The difficulty is not much related to skill level after a point.",
      "For each muscle group you would want around 10-20 sets per week but that can increase as you get more experience. The recommended limit is about 25 but most won't reach that without overtraining. As you become more experienced you will start to find your own sweet spot in that range. The difference in increasing volume after 10 is very minimal, and increases risk substantially, for a beginner I would recommend at least 6, as that's where diminishing returns starts to creep in.",
      <>I have also created a split builder that you can find here: <a href="./split-builder" className="text-app-accent underline">[Split Builder]</a>, it will create the whole plan out that you can download and follow, and each split will be an option, it will be more in depth than is stated here.</>
    ]
  },
  {
    id: 'full-body',
    title: 'Full Body (Beginner)',
    content: [
      "If you want nothing more than to just get the gym over with but reap all the benefits for real world strength this is probably where you will start and never leave. Everyday you are in the gym your focus is on every muscle group. In this split to achieve the correct rep range you will probably be doing at least 2 gym days a week, ideally a few more. This one is very time efficient.",
      "There are about 6 different exercises per session so you will need to hit all 6 movement patterns here each day. Thankfully they are simple and I have a large list of exercises for each pattern so choose the ones you enjoy the most. I would recommend at least 1 rest day between gym days in this split.",
      <><strong>Sample Split:</strong><br/>
      Tuesday: Main Patterns: Squat & Hinge (plus everything else)<br/>
      Thursday: Regular full body<br/>
      Saturday: Main Patterns: Push & Pull (plus everything else)</>
    ]
  },
  {
    id: 'upper-lower',
    title: 'Upper Lower (Beginner/Intermediate)',
    content: [
      "I would say if you are starting from scratch, start from Upper Lower as it's easy to get a hang of and there's a lot more flexibility than the others. It is just as it sounds, each week you will have an Upper body day (think arms, chest, back etc.) and a lower body day (legs mostly lol).",
      "Because now we have dedicated days for upper and lower, the main exercises are a lot easier to slot in and the corresponding auxiliary lifts have much more impact. This means that you now only need 1 main lift per day, allowing more power output, and decreasing injury chance.",
      <><strong>Sample Split:</strong><br/>
      Monday: Upper (Main lift: Push)<br/>
      Wednesday: Lower (Main lift: Hinge)<br/>
      Thursday: Upper (Main lift: Pull)<br/>
      Saturday: Lower (Main Lift: Squat)</>
    ]
  },
  {
    id: 'ppl-variations',
    title: 'PPL Variations (Intermediate/Advanced)',
    content: [
      "Push Pull Legs (PPL) is the quintessential bro split. A drawback here is that more time is spent on upper body than lower body, leaving legs wanting a bit more. These are often asynchronous to weekdays so I will just number them days and you can slot in your rest days as needed. remember to try to have 2 rest days per cycle",
      <><strong>Standard PPL:</strong><br/>
      Day 1: Push (chest, triceps, shoulders) with Main Lift<br/>
      Day 2: Pull (back and biceps) with Main Lift<br/>
      Day 3: Legs (Quads, Hamstring, Glutes, Calves) with Main Lift Hinge & Squat</>,
      <><strong>PPL Aux (The split I use):</strong> In this one we just slot in an extra day to hit the muscles that you think weren't trained sufficiently (shoulders, forearms, etc).<br/>
      Day 4: Aux (Shoulders & Forearms & extra legs)</>,
      <><strong>PPLUL (The Hybrid):</strong> Popularized by <a href="https://www.youtube.com/@JeffNippard" target="_blank" className="text-app-accent underline">Jeff Nippard</a>, this adds an Upper and Lower day to ensure optimal volume.<br/>
      Day 4: Upper (Chest, Tri, Back, Bi)<br/>
      Day 5: Lower (Quads, Hamstring, Glutes, Calves) Main Lift Squat</>
    ]
  },
  {
    id: 'professional',
    title: 'Hypertrophy Professional',
    content: [
      "This split is even beyond me so I wont be providing a plan for this as they are highly specialized to what you want to do each day. Splits like these are for professionals who compete in a sport and usually will have their own coach creating a plan for them. I mention it here just so you know it exists."
    ]
  },
  {
    id: 'end',
    title: "The End",
    content:[
      "Congrats, you have reached the end of my massive rant on the gym. I hope you found some stuff useful. Now that your knowledge is up to speed, go check out the split builder I made to create a personalized plan for you.",
      <Link 
        to="/workoutlanding/workoutplan/splitbuilder" 
        className={`${THEME.accent} hover:opacity-80 ${THEME.base}/20 border border-app-accent text-app-text-main font-bold py-3 px-8 rounded-full transition-all`}
      >
        To Split Builder
      </Link>
    ]
  }
];