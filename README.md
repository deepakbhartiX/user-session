implementing fully working session auth for user using express session.

using ejs as templete engine for ssr ( server side rendering) which mean it just a simple html which directly render by server.

i choose this ejs which turn out my bad decision for this session proeject beacause it made more frontend complex it diffcult to hit api and handle that data wihtout a proper frontend technology like react,nextjs etc.


but in the end i manage to do things works by make frontend more complex. i created two diffrent folder for frontend and backend for reduce project complexity.


On frontend nothing doing much only display logged user details.


On backend side i created a defult user profile with user sigup and then login generate a session on server then i set a certain time period for session cookie to expired which mean after that time that user session will end and user need to reauth again to get new session.
