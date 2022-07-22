const workouts = [
  {
    name: '1-SMR-9',
    workout: ['Gastrocnemics/soleus', 'Adductors', 'Latissimus dorsi', 'Thoracic spine', 'Tensor fascia latae', 'Piriformis', 'Peroneals', 'Hamstrings', 'Quadricops'],
    sets: [],
    duration: [],
  },
  {
    name: '2-Static stretching-17',
    workout: ['Static Gastrocnemics', 'Static standing TFL stretch', 'Static kneeling hip flexor stretch', 'Static standing adductor stretch', 'Static latissimus dorsi ball stretch', 'Static pectoral stretch', 'Static upper Trapezius',
    'Soleus', '90/90 hamstring', 'Supine biceps femoris', 'Staging biceps femoris', 'Seated ball adductor', 'Adductor magnus', 'Supine piriformis', 'Erector spinae', 'Levator scapulae', 'Strenodeido mastoid'],
    sets: [],
    duration: []
  },
  {
    name: '3-Active flexibility-8',
    workout: ['Active Gastrocnemius stretch', 'Active supine biceps femoris stretch', 'Active standing TFL stretch', 'Active kneeling hip flexor stretch', 'Active standing adductor stretch', 'Active latissimus dorsi ball stretch',
    'Active pectoral stretch', 'Active upper trapezius'],
    sets: [],
    duration: []
  },
  {
    name: '4-Functional flexibility-11',
    workout: ['Prisoner squat', 'Multiplaner lunge with Reach', 'Single leg squat touch down', 'Tube walking - side to side', 'Medicine ball lift and chop', 'Medicine ball rotation', 'Lunges with rotation', 'Medicine ball lying Russian tursk',
    'Leg swing - front to back', 'Leg swing - side to side', 'Push up with rotation'],
    sets: [],
    duration: []
  },
  {
    name: '5-Controversial stretches-5',
    workout: ['Inverted hurdler\'s stretch', 'Plow', 'Shoulder stand', 'Straight leg toe stretch', 'Arching quadriceps'],
    sets: [],
    duration: []
  },
  {
    name: '6-Neck, Chest, Shoulders-7',
    workout: ['Thread the Needle', 'Floor Angels', 'Open-Heart stretch', 'Seated Neck stretch', 'Arm circles', 'Hinge and Reach', 'Reverse tabletop'],
    sets: [],
    duration: []
  },
  {
    name: '7-Arms, Hands & Wrists-4',
    workout: ['Biceps stretch', 'Overhead triceps stretch', 'Wrist-extensor stretch', 'Wrist-flexor stretch'],
    sets: [],
    duration: []
  },
  {
    name: '8-Back & Torso-10',
    workout: ['Self-Myofascial Release for mid & upper back', 'Low cobra', 'Cat-cow', 'Supine spinal twist', 'Standing crescent moon', 'Bear hug', 'Kneeling lat stretch', 'Heat-to-toe stretch', 'Bird-dog', 'Quadruped Rotations'],
    sets: [],
    duration: []
  },
  {
    name: '9-Hips & Glutes-7',
    workout: ['Half lord of the fishes', 'Bound angle', 'Figure 4', 'Self-myofascial', 'Leg swings', 'Figure 8', 'Side-to-side standing disgonals'],
    sets: [],
    duration: []
  },
  {
    name: '10-Knees & Things-4',
    workout: ['Assisted supine hamstring stretch', 'Supported standing quadriceps stretch', 'Wide-legged forward fold with chest expansino', 'Assisted low lunge'],
    sets: [],
    duration: []
  },
  {
    name: '11-Lower legs, Ankles & Feet-5',
    workout: ['Ankle circles', 'Standing calf stretch', 'Tibialis anterior stretch', 'Self-myofascial release for calves', 'Downward-facing dog'],
    sets: [],
    duration: []
  },
{
    name: '12-Resistance band-chest-11',
    workout: ['Resistance band chest press', 'Decline chest press', 'Incline chest press', 'Incline chest press variation', ' Single arm Resistance band chest press', 'Banded pushup', 'Resistance band chest fly', 'Resistance band high crossover', 'Half-kneeling low crossover', 'Single arm low crossover', 'Resistance band clapping push'],
    sets: [],
    duration: []
  },
{
    name: '13-Resistance band-shoulder-10',
    workout: ['Banded one arm shoulder press', 'Banded one arm lateral raise', 'Banded front raise', 'Banded upright row', 'Banded reverse fly', 'Banded thrusters', 'Banded behind the neck press', 'Banded one arm front raise', 'Banded rear belt fly', 'Banded bear crawl'],
    sets: [],
    duration: []
  },
{
    name: '14-Resistance band-back-8',
    workout: ['Single arm row', 'Bent over row', 'Dead lift', 'Latt pull down', 'Seated row', 'Shift legged dead lift', 'Reverse fly', 'Trap raises'],
    sets: [],
    duration: []
  },
{
    name: '15-Resistance band-biceps-6',
    workout: ['Single arm band biceps curl', 'Single arm band reverse biceps curl', 'Single arm resistance band hammer curl', 'Band biceps curl', 'Band reverse biceps curl', 'Band concentration curl'],
    sets: [],
    duration: []
  },
{
    name: '16-Resistance band-triceps-6',
    workout: ['Kick back', 'Overhead extention', 'Supine reverse closegrip press', 'Crossbow extention', 'Crossbody press down', 'Concentration pressdown'],
    sets: [],
    duration: []
  },
{
    name: '17-Resistance band-core-5',
    workout: ['Heel rouches', 'Ab twists', 'Side bends', 'Wood chopper', 'Leg raise'],
    sets: [],
    duration: []
  },
{
    name: '18-Bodyweight exercise-',
    workout: ['Jumping jacks', 'High knees', 'Mountain climbers', '4-count burpees', 'Flat out burpees', 'Star jacks', 'Tuck jumps', 'Air squat', 'Alternation lunge step', 'Bear crawl', 'Leg raise', 'Bicycle crunch', 'Bottom to bottom squat' ,'Boxjump stepup', 'Bridge', 'Burpee', 'Burpee box jump', 'Burpee Long jump', 'Burpee Lunge step', 'Butt kickers', 'Dead bug', 'Decline pushup', 'Deficit pushup', 'Diamond pushup', 'Dip', 'Elbow plank', 'Flutter kick', 'Grapevine/Karaoke step',
    'Hand release pushup', 'Handstand hold', 'Handstand pushup', 'High knees', 'Hollow body', 'Hollow body leg lift', 'Jumping lunges', 'Jumping squat', 'Long jump', 'One leg bridge', 'One leg pushup', 'Plank-up', 'Plank walk out', 'Plyo pushup', 'Power skip', 'Push up', 'Reverse situp', 'Reverse lunge', 'Run backwards', 'Side plank', 'Situp', 'Spiderman crawl',
    'Spiderman plank', 'Split squat', 'Sprint', 'Squat jack', 'Squat thrust', 'Stepup', 'Superman', 'Tapping plank', 'Tuck jump', 'Uphill sprint', 'U-up', 'Walking lunge', 'Yoga pushup'],
    sets: [],
    duration: []
  },
{
    name: '19-Kettleball exercise-',
    workout: ['KB clean', 'KB clean and press', 'KB clean and push press', 'KB clean and thrusters', 'KB deadlift', 'KB front squat', 'KB one-leg dead lift', 'KB hang clean', 'KB power swing', 'KB press', 'KB push press', 'KB Rackhold', 'KB Renegade row', 'KB Russian twist', 'KB Snatch', 'KB Swing', 'KB thruster', 'KB two hand high pull', 'KB wide leg dead lift'],
    sets: [],
    duration: []
  },
{
    name: '20-Core-stabilization-8',
    workout: ['Marching', 'Two leg floor bridge', 'Floor prone cobra', 'Plank', 'Ball bridge', 'Ball cobra', 'Side plank'],
    sets: [],
    duration: []
  },
{
    name: '21-Core-Strength-8',
    workout: ['Ball crunch', 'Back extention', 'Reverse crunch', 'Cable rotation', 'Knee-up', 'Cable lift', 'Cable chop', 'Reverse hypers'],
    sets: [],
    duration: []
  },
{
    name: '22-Core-Power-6',
    workout: ['Rotation chest pass', 'Ball medicine ball pullover throw', 'Front medicine ball oblique throw', 'Soccer throw', 'Side medicine ball oblique throw', 'Medicine ball back extention throw'],
    sets: [],
    duration: []
  },
{
    name: '23-Balance-stabilization-7',
    workout: ['Single leg balance', 'Single leg balance reach', 'Single leg hip rotation', 'Single leg arm and leg motion', 'Single leg windmill', 'Single leg lift and chop', 'Single leg throw and catch'],
    sets: [],
    duration: []
  },
{
    name: '24-Balance-strength-7',
    workout: ['Single leg squat', 'Single leg squat touchdown', 'Single leg Romanian deadlift', 'Single leg squat with cable assistance', 'Reverse lunge to balance', 'Multiplaner stup-up to balance', 'Multiplaner lunge to balance'],
    sets: [],
    duration: []
  },
{
    name: '25-Balance-power-6',
    workout: ['Multiplanar hop with stabilization', 'Multiplanar single-leg box hop-up with stabilization', 'Multiplanar single-leg box hop-down with stabilization', 'Single propriceptive hop with stabilization: Sagittal plane', 'Single propriceptive hop with stabilization: frontal plane', 'Single propriceptive hop with stabilization: transverse plane'],
    sets: [],
    duration: []
  },
{
    name: '26-Plyometric-stabilization-7',
    workout: ['Squat jump with stabilization', 'Box jumpup with stabilization', 'Box jump-down with stabilization', 'Multiplanar jump with stabilization', 'Cone jumps with stabilization: Sagital plane', 'Cone jumps with stabilization: frontal plane', 'Cone jumps with stabilization: transverse plane'],
    sets: [],
    duration: []
  },
{
    name: '27-Plyometric-strength-7',
    workout: ['Squat jump', 'Tuck jump', 'Butt kick', 'Power step-up', 'Jump rope', 'Lunge jumps', 'Repeat box jumps'],
    sets: [],
    duration: []
  },
{
    name: '28-Plyometric-power-5',
    workout: ['Ice skaters', 'Single-leg power stepup', 'Propriceptive Plyometrics: 3 plane', 'Box run step: Sagital plane', 'Box run step: frontal plane'],
    duration: []
  },
{
    name: '29-Total body-stabilization-5',
    workout: ['Single leg squat touchdown, curl, to overhead press', 'Single leg Romanian deadlift, curl, to overhead press', 'Single leg squat to tow', 'Ball squat, curl to press', 'Multiplanar stepup balance, curl, to overhead press'],
    sets: [],
    duration: []
  },
{
    name: '30-Total body-strength-4',
    workout: ['Lunge to two-arm dumbbell press', 'Squat, curl, to two-arm press', 'Step-up to overhead press: Sagital plane', 'Romanian deadlift, shrug to calf raise'],
    sets: [],
    duration: []
  },
{
    name: '31-Total body-power-5',
    workout: ['dumbbell snatch', 'Squat thrust (burpies)', 'Kettleball hang clean and jerk', 'Two-arm push press', 'Barbell clean'],
    sets: [],
    duration: []
  },
{
    name: '32-Chest-exercises-',
    workout: ['Low banded standing chest flys', 'dumbbell bench on medicine ball', 'Hexagonal dumbbell bench press', 'Two board 3 in elevated push up', 'Bench press dead press against bend', 'Louie pushup against band', 'Neutral grip dumbbell bench press against bend', 'Neutral grip floor press', 'Sphynx push ups', 'Barbell floor press', 'Reverse heavy band bench press', 'Bench press', 'Incline bench press', 'Single arm dumbbell bench press', 'Incline dumbbell bench press',
    'Push up', 'Defice push up', 'Unilateral incline dumbbell bench press', 'dumbbell floor press feet elevated', 'Wide grip bench press', 'SIngle arm banded chest fly', 'Banded chest fly', 'Knee push ups', 'Narrow push ups', 'Wide push ups', 'Commander push ups', 'Alligator push ups', 'Plyo push ups', 'Single-leg push ups', 'Incline bench press', 'Bench press', 'Close grip bench press', 'Machine bench press', 'Parallel bar dips', 'Bumbell press', 'dumbbell flys', 'Incline dumbbell press',
    'Incline dumbbell flys', 'Pec deck flys', 'Cable crossover fly', 'dumbbell pullovers', 'Barbell pullovers'],
    sets: [],
    duration: []
  },
{
    name: '33-Chest-Stabilization-4',
    workout: ['Ball dumbbell chest press', 'Push up', 'Ball push up: Hand on ball', 'Standing cable chest press'],
    sets: [],
    duration: []
  },
{
    name: '34-Chest-strength-4',
    workout: ['Flat dumbbell chest press', 'Barbell bench press', 'Incline dumbbell chest press', 'Incline barbell bench press'],
    sets: [],
    duration: []
  },
{
    name: '35-Chest-power-4',
    workout: ['Two-arm medicine ball chest press', 'Rotation chest pass', 'Speed tubing chest press', 'Plyometric pushup'],
    sets: [],
    duration: []
  },
{
    name: '36-Shoulder-exercises',
    workout: ['Rear delt raise', 'Front delt raise', 'Laterla delt raise', 'Banded delt ball', 'Rear raise', 'Aty with plates', 'Single arm standing banded reverse fly', 'dumbbell sweat shrug', 'Lying faceup banded reverse fly', 'Incline face down reverse fly', 'Neutral grip dumbbell press', 'H-rolls', 'Band face pulls', 'GHD dumbbell flys', 'Strict press with single bands', 'Lying band pull', 'dumbbell shrug', 'Upright row', 'Landmive half kneeling single arm press',
    'dumbbell shoulder press', 'Seated arnold press', 'Brad ford press', 'dumbbell Z press', '3wat raise', 'Bandface pull', 'dumbbell sweat shrug', 'Band pull apart', 'Back press', 'Seated front press', 'Seated dumbbell press', 'Arnold press', 'Bent over lateral raises', 'Lateral dumbbell raise', 'Alternate front arm raise', 'Side-lying lateral raise', 'Low pulley front raises, overhand grip', 'Low pulley front raises, neutral grip', 'External arm roatations at a pulley',
    'High pulley lateral extention', 'Low pulley bent-over lateral raise', 'Low pulley lateral raises', 'One arm dumbbell front raises', 'Barbell front raises', 'Uprightrows', 'Machine lateral raises', 'Peck deck rear delt laterals'],
    sets: [],
    duration: []
  },
{
    name: '37-Shoulder-stabilization-5',
    workout: ['Single leg dumbbell scaption', 'Seated stability ball military press', 'Single-leg two arm overhead press', 'Ball combo 1', 'Ball combo 2'],
    sets: [],
    duration: []
  },
{
    name: '38-Shoulder-strength-5',
    workout: ['Seated dumbbell shoulder press', 'Seated shoulder press machine', 'Seated dumbbell lateral raise', 'Shoulder shrug', 'Standing dumbbell shoulder flexion'],
    sets: [],
    duration: []
  },
{
    name: '39-Shoulder-power-4',
    workout: ['Front medicine ball oblique throw', 'Overhead medicine ball throw', 'Overhead throw', 'Speed tubing shoulder press'],
    sets: [],
    duration: []
  },
{
    name: '40-back-exercises',
    workout: ['Chin ups', 'Reverse grip chinups', 'Lat pull down', 'Back lat pull down', 'Clock grip lat pull down', 'Seated cable row', 'Wide grip seated row', 'Straight-arm lat pull down', 'One-arm dumbbell row', 'dumbbell row', 'Barbell rows', 'T-bar row', 'T-bar rows with abdominal support', 'stiff-leg deadlift', 'Sumo deadlift', 'Deadlift', 'Trap bar deadlift', 'Bakc extention', 'Machine back extention', 'Upright rows', 'Barbell shrugs', 'dumbbell shrugs', 'Trap bar shrugs', 'Machine shrugs',
'Single arm banded low row', 'Triangle lat press down', 'Supinated grip barbell row', 'Landimine barbell row', 'Seated barbell good morning', 'Banded lat pull down', 'Barbell rack louded arch back good morning', 'Chest supported barbell row', 'Banded lat pull over', 'Bent over barbell row against single band', 'Conventional arch back deadlift', 'Single leg crossbody romanian deadlift', 'Single arm eccentric pullup', 'Stretch grip single leg deadlift', 'Landmine single arm row', 'Landmine single leg deadlift',
'Supine bent over row', 'Bent over row', 'Seated bar row to chest', 'SIngle leg dumbbell deadlift', 'Dimmel deadlift', 'Reverse huper with scaling', '3 point dumbbell row', 'Pullover over bench', 'dumbbell Romanian deadlift', 'Chest supported dumbbell row'],
    sets: [],
    duration: []
  },
{
    name: '41-Back-stabilization-4',
    workout: ['Standing cable row', 'Ball dumbbell row', 'Single-leg pull down', 'Ball cobra'],
    sets: [],
    duration: []
  },
{
    name: '42-Back-strength-5',
    workout: ['Seated able row', 'Seated lat pull down', 'Straight-arm pull down', 'Pull-up', 'Supported dumbbell row'],
    sets: [],
    duration: []
  },
{
    name: '43-Back-power-4',
    workout: ['Medicine ball pull over throw', 'Soccer throw', 'Woodchop throw', 'Speed tubing row'],
    sets: [],
    duration: []
  },
{
    name: '44-Biceps exercise-7',
    workout: ['Concentration curl', 'Banded biceps curl', 'Hammer curl', 'Barbell curl', 'Pronated reverse grip curl', 'dumbbell spider curl', 'Slanted band bicep curl'],
    sets: [],
    duration: []
  },
{
    name: '45-Biceps-stabilization-4',
    workout: ['Single-leg dumbbell curl', 'Single-leg barbell curl', 'Single-leg cable curl', 'Single-leg hammer curl'],
    sets: [],
    duration: []
  },
{
    name: '46-Biceps-Strength-4',
    workout: ['Seated two-arm dumbbell biceps curl', 'Biceps curl machine', 'Seated hammer curl', 'Standing barbell curl'],
    sets: [],
    duration: []
  },
{
    name: '47-Tricpes-exercise-14',
    workout: ['dumbbell 3m press', 'Barbell 3m press', 'Close grip bench press', 'Decline dumbbell rollback extention', 'Close grip bench press dead press', 'Flat dumbbell take press', 'Kettleball skull crushers', 'Straight skull crusher', 'Seated banded triceps extention', 'Incline dumbbell take press', 'dumbbell rollback', 'Racked skull crusher', 'Banded triceps pushdown', 'Barbell rollback'],
    sets: [],
    duration: []
  },
{
    name: '48-Triceps-stabilization-4',
    workout: ['Supine ball dumbbell triceps extention', 'Prone ball dumbbell tricpes extention', 'Single-leg cable pressdown', 'Narrow grip pushup'],
    sets: [],
    duration: []
  },
{
    name: '49-triceps-strength-3',
    workout: ['Cable pushdown', 'Supine bench barbell triceps extention', 'Narrow grip bench press'],
    sets: [],
    duration: []
  },
{
    name: '50-Leg-exercise-',
    workout: ['Leg press or reverse hyper', 'Banded leg extention', 'Incline dumbbell tate press', 'Front loaded barbell bulgarian', 'Lying leg curl', 'Back rack barbell lunges', 'Front rack barbell lunges', 'Slider cossack squats', 'Front rack deficit lunges', 'Back rack deficit lunges', 'Barbell overhead walking lunges', 'Zercher squat', 'Kettleball front rack bulgarian split', 'Kettleball front rack lunges', 'Hamstring activation',
    'Band pull through', 'Back rack reverse lunges', 'Single leg slider curl', 'Slider curl', 'dumbbell squats', 'Squats with a dumbbell held between the legs', 'Front squats', 'Squats', 'Power squats', 'Leg press', 'Hack squats', 'Leg extention', 'Lying leg curl', 'Standing leg curl', 'Seated leg curl', 'Good morning', 'Cable abduction', 'Machine abduction', 'Standing calf raises', 'Donkey calf raises', 'One-leg toe raises', 'Seated machine calf raise', 'Seated barbell calf raises',
    'Narrow squats', 'Jump squats', '180 jump squats', 'pistol squats', 'forward lunges', 'backward lunges', 'curtsy lunges', 'Single leg deadlift', 'Side lunges', 'Jump lunges', 'Wall sit', 'SL squats'],
    sets: [],
    duration: []
  },
{
    name: '51-Leg-stabilization-5',
    workout: ['Ball squat', 'Multiplanar stepup to balance', 'Cable squat', 'Baseball squat', 'Ball hamstring curl'],
    sets: [],
    duration: []
  },
{
    name: '52-Leg-strength-5',
    workout: ['Leg press', 'Barbell squat', 'Romanian deadlift', 'Cable hamstring curl', 'Cable leg extension'],
    sets: [],
    duration: []
  },
{
    name: '53-Leg-power-5',
    workout: ['Squat jump', 'Tuck jump', 'Power step-up', 'Lunge jumps', 'Box jumps'],
    sets: [],
    duration: []
  },
{
    name: '54-Abs-25',
    workout: ['Crunches', 'Situps', 'Gym ladder situps', 'Calves over bench situps', 'Incline bench situps', 'Suspended bench situps', 'High pulley crunches', 'Machine crunches', 'Incline leg raise', 'Leg raises', 'Hanging leg raises', 'Trunk roatation', 'dumbbell side bends',
    'High plank', 'High side plank', 'Low plank', 'Low side plank', 'Low side plank', 'Situps', 'Crunches', 'Bicycle crunches', 'Quardruped limb raises', 'Scissor kicks', 'Leg raises', 'V-ups', 'Windshield wipers'],
    sets: [],
    duration: []
  },
{
    name: '55-Arm-23',
    workout: ['dumbbell curls', 'Concentration curls', 'Incline dumbbell curls', 'Hammer curls', 'Low pulley curls', 'High pulley curls', 'Barbell curls', 'Machine curls', 'Preacher curls', 'Reverse wrist curl', 'Wrist curl', 'Reverse barbell curl', 'Push downs', 'Reverse grip push down', 'One arm reverse grip push down', 'Overhead cable tricpes extention', 'Lying triceps extention', 'Lying dumbbell tricpes extention', 'One arm overhead dumbbell extention', 'Triceps kick back', 'Seated dumbbell tricpes extention', 'Seated Z-bar triceps extention', 'Triceps bench dips'],
    sets: [],
    duration: []
  },
{
    name: '56-Buttocks-19',
    workout: ['Barbell lunges', 'dumbbell lunges', 'Cable kick bucks', 'Machine hip extention', 'Floow hip extention', 'Bridging', 'Cable hip abduction', 'Seated machine hip abduction', 'Bent-leg crossovers', 'Curtsy lunge', 'Single leg deadlift', 'Bridge', 'Single leg bridge', 'Hip abductions', 'Donkey kicks', 'Fire hydrant', 'Pistol squats', 'Plie squats', 'Side Lunges'],
    sets: [],
    duration: []
  }
]