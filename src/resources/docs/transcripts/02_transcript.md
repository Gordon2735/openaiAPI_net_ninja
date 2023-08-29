<br />
<br />
<img src="./src/images/imageMaster.png"
style="display: block; 
           margin-left: auto;
           margin-right: auto;
           width: 50%;
           rotate: -8deg;"
 ></img>
<br />
<br />

# ![Net Ninja](/src/images/image.png) OpenAI Tutorial #1 - Intro & Setup

<br />
<br />

# Transcript for OpenAI Tutorial #2 - Chat Completion

<br />
<br />
-   
0:02
all right then gang so now we've set up-    
0:04
open AI in the project and now we want- 
0:06
to start interacting with open AI to do-    
0:08
things for us so the first thing I want-    
0:10
to do is I want to try using the chat-  
0:13
completion service which is basically-  
0:15
going to give us the same kind of-  
0:17
behavior that chat GPT has where we ask-    
0:19
a question and the AI assistant produces-   
0:22
a response for us now the question we're-   
0:25
going to be asking to begin with is that-   
0:27
we'd like the AI assistant to come up-  
0:29
with a video description based on a-    
0:32
video title that we provide it with so- 
0:34
we'll be sending that question or that- 
0:36
prompt to open Ai and then we'll get a- 
0:39
response which will hopefully be the-   
0:41
video description and in order to do-   
0:43
this we're going to need some user input-   
0:45
to get the title of the video now later-    
0:47
on we'll be creating a front end so that-   
0:49
the user can just type that video title-    
0:51
in an input field and press submit but- 
0:54
since we don't have that front end yet- 
0:55
we're going to use the terminal to get- 
0:57
the title from the user instead so to do-   
0:59
that we need the readline module and we-    
1:02
can and require that at the top of the- 
1:04
app.js file so that we can use it to-   
1:07
create an interface-    
1:09
in which we can then Define the input-  
1:12
and also the output of the interface now-   
1:15
we're going to store this in a constant-    
1:18
and I'm going to call that RL and in our-   
1:20
case the input of this interface is-    
1:22
going to be process dot standard in or- 
1:26
STD in which basically means the input- 
1:28
is going to be from our keyboard when we-   
1:30
type in the terminal and the output is- 
1:33
going to be process.standard out which- 
1:35
again means the output is going to be-  
1:38
output into the terminal basically so-  
1:40
once we have that interface we can then-    
1:43
use it to ask the user a question in the-   
1:46
terminal and we do that by using the-   
1:48
question method on the interface we just-   
1:50
created so RL dot question and invoke it-   
1:53
and now as an argument we can pass in a-    
1:56
string which is basically the question- 
1:58
we want to ask so we can just ask for a-    
2:01
YouTube video title-    
2:03
but also as a second argument we can-   
2:05
fire a function once the user submits an-   
2:08
answer in the terminal so once they-    
2:09
press enter and that function takes as- 
2:12
an argument the answer that the user-   
2:13
provided us with and we can do something-   
2:16
with it so for now I just want to log-  
2:18
this title to the console to make sure- 
2:21
that everything works and we can test-  
2:24
that this is going to be running-   
2:25
correctly by opening up the terminal and-   
2:28
typing node and then the name of the-   
2:30
file we want to run which is app and-   
2:32
when we do that we can then see the-    
2:34
question and we can answer the question-    
2:36
and then hit enter to see the response- 
2:39
and the response is basically just the- 
2:41
answer that we gave it it's just logging-   
2:43
it to the console right-    
2:45
awesome so now we have some input the-  
2:48
next thing we want to do is use that-   
2:50
user import with openai to generate some-   
2:52
kind of response alright so I'm just on-    
2:55
the API reference and then I'm going to-    
2:57
go to chat right here and create chat-  
3:00
completion so we can see this is how we-    
3:02
create a chat response right here so we-    
3:06
have this constant completion that we're-   
3:08
storing the response in and then we say-    
3:10
open AI which is what we've already-    
3:12
created remember when we set up the-    
3:13
configuration and then create chat- 
3:16
completion and we invoke that and pass- 
3:17
in an object right here okay with a-    
3:19
couple of different properties the first-   
3:21
one is the model so there's different-  
3:23
models that we can use when we're using-    
3:25
open Ai and they kind of work a little- 
3:28
bit differently in the way that they-   
3:30
provide responses now if you want to see-   
3:32
other models you can do that by clicking-   
3:34
here and if we scroll down we're going- 
3:37
to see all of the different models I-   
3:39
think at some point-    
3:40
oh wait no we're not okay if you go to- 
3:42
documentation and then go to models you-    
3:44
certainly do so this is the one we'll be-   
3:46
using GPT 3.5 it's actually turbo so if-    
3:50
we click on that it's this one right-   
3:52
here that we're using but there's many- 
3:54
different models that you can use and-  
3:56
you can see the descriptions of them-   
3:57
right here so we're using this one- 
4:00
um which is also here and then the- 
4:02
second property is the messages property-   
4:05
and that's an array of different-   
4:06
messages so inside this array each kind-    
4:10
of message or prompt if you like that we-   
4:12
want to send the AI as an object now we-    
4:15
define the role of that message which is-   
4:18
in our case the user now when we get a- 
4:21
response we're also going to get a raw- 
4:23
property in that response and that is-  
4:25
going to be the assistant because that- 
4:26
is the AI role the assistant okay in our-   
4:29
case the role is the user because it's- 
4:32
the user who's asking the question- 
4:34
second property inside this object is-  
4:36
the content and that's the actual-  
4:37
question or prompt that we're sending to-   
4:41
open AI in order to generate that-  
4:43
response okay now when we get a response-   
4:47
we have to grab it like this right here-    
4:50
so- 
4:51
completion.data dot choices and then the-   
4:54
first element inside that and then the- 
4:56
message so that is the actual message-  
4:59
response okay now if we come down here- 
5:01
we can see the entire response that we- 
5:03
get so what we're doing is going into-  
5:06
this object then into the choices then- 
5:09
the message and then the content we can-    
5:11
see here the role like I said is the-   
5:12
assistant in the response but these-    
5:15
other properties we can use as well okay-   
5:17
so let's try this out this function-    
5:19
create chat completion inside our-  
5:22
project okay so let's give this a whirl-    
5:24
so I'm going to create a couple of- 
5:25
functions to kind of ask openai a couple-   
5:28
of different questions a question for-  
5:30
the video description and also I want to-   
5:32
ask a question- 
5:33
um so it can produce some tags as well- 
5:35
based on the title of the video so in-  
5:38
order to create these functions I'm-    
5:39
going to create a new folder and it's-  
5:41
going to be called controllers now the- 
5:42
reason I'm doing this is because later- 
5:43
on we're going to be creating an Express-   
5:45
app and an API Ai and it makes sense to-    
5:48
kind of organize the code a little bit- 
5:50
now you don't have to if you don't want-    
5:51
to you can put the functions in app.js- 
5:53
or wherever you prefer I'm going to-    
5:55
stick it inside a controller's folder-  
5:57
and we're going to call this open AI-   
6:00
controller- 
6:02
dot JS all right so inside here the-    
6:04
first thing we need to do is require our-   
6:07
config thing right here this thing that-    
6:09
we export so-   
6:11
let's say const-    
6:13
open AI is equal to or require- 
6:17
and then we want to say dot dot forward-    
6:19
slash to come out of the current-   
6:21
directory which is controllers then into-   
6:23
the config folder then we want the open-    
6:26
AI config so we're grabbing that export-    
6:28
open Ai and now we can use that to- 
6:31
interact with open AI-  
6:33
so I'm going to create a function first-    
6:35
of all called generate meta so by meta I-   
6:37
mean the video description and the tags-    
6:39
but call the function whatever you want-    
6:41
this is going to be an async function-  
6:42
because we're going to use a um a weight-   
6:45
inside it and then as an argument we're-    
6:47
going to take in the title of the video-    
6:48
now remember currently we're grabbing-  
6:51
that title right here when we ask a-    
6:53
question in the terminal so we can pass-    
6:55
it in as an argument-   
6:57
all right so inside here now we're going-   
6:59
to communicate with open AI so I will-  
7:02
say const description is equal to a-    
7:05
weight and then it's going to be open AI-   
7:08
Dot and we use that method create chat- 
7:10
completion and inside here we pass an-  
7:13
object with those two properties right- 
7:15
we have the model-  
7:16
which is going to be GPT-   
7:20
3.5 hyphen turbo like so the second-    
7:25
property is going to be the messages-   
7:26
property-   
7:28
and that is an array remember-  
7:31
where each object is a message the role-    
7:33
of this one is going to be User it's the-   
7:36
user asking the question and the content-   
7:39
is going to be the question that we're- 
7:40
asking so I will use backticks here-    
7:43
because I want to Output a variable-    
7:45
inside it so we're going to use a-  
7:46
template string so I'll say to the AI-  
7:49
come up with a description- 
7:53
for a YouTube-  
7:55
video called and then we'll output that-    
7:58
variable so dollar sign curly braces-   
8:00
title which is this thing we're taking- 
8:02
right here so that's what we're asking- 
8:04
to- 
8:05
um the AI-  
8:07
all right now there is a third property-    
8:08
I want to add and that is going to be-  
8:10
the max tokens property and this-   
8:12
basically says how many tokens you're-  
8:14
willing to spend on this question and it-   
8:17
will cost roughly one token per letter- 
8:20
it's not exact- 
8:22
um but kind of see it as one token per- 
8:24
letter it does change but I'm going to- 
8:26
say about 100 here- 
8:28
all right so-   
8:29
that is all we need to do and then once-    
8:32
we have the description we can access-  
8:34
the message the response message on that-   
8:37
by saying first of all console.log so we-   
8:39
can see it then description-    
8:42
dot data dot choices-   
8:45
and then it was the first element inside-   
8:47
choices and then it was the message-    
8:49
property-   
8:51
all right so let's see if this works-   
8:54
I am now going to import this thing or- 
8:57
rather we need to export it so export-  
8:59
uh sorry module-    
9:02
dot exports and we set that equal to an-    
9:04
object and inside here we'll say-   
9:07
generate meta there is going to be- 
9:09
another function that we export later-  
9:10
which is why we're doing it this way-   
9:11
inside an object save that inside app.js-   
9:15
I'm going to import it so I will say-   
9:17
const-  
9:18
and then we want generate-  
9:21
if I can spell it laminate generate meta-   
9:25
and that is equal to a require- 
9:30
and then we want to go inside the-  
9:31
controller- 
9:33
or controllers function folder rather-  
9:35
and then we want the open AI controller-    
9:38
so now we can use that function right-  
9:41
here generate meta- 
9:45
like so and it's going to automatically-    
9:47
pass in-    
9:49
title right here okay-  
9:52
so let's cross our fingers and hope this-   
9:54
works I'm going to save it and open up- 
9:56
the terminal I'm going to cancel out of-    
9:57
this process and run it again node app- 
9:59
so YouTube video title let's say
-   10:02
complete
-   10:04
HTML
-   10:06
tutorial all right
-   10:08
let's see what
-   10:09
open air comes back with now it does
-   10:11
take 10-15 seconds to generate a
-   10:14
response but we should see in a minute
-   10:16
and there it is so we can see the role
-   10:18
which is assistant and then the content
-   10:20
which is this big description right here
-   10:22
I'm not going to read it out loud feel
-   10:24
free to pause the video and read it for
-   10:26
yourself but it is generally a pretty
-   10:28
good description based on the title now
-   10:30
if you wanted you know a more finely
-   10:33
grained response then you need to kind
-   10:35
of tweak the way that you prompt the AI
-   10:37
make a better descriptive question but
-   10:41
that will do for us
-   10:42
so we have the description right here we
-   10:45
also want to generate tags based on the
-   10:47
title as well so we can go back to this
-   10:50
open AI controller and inside the same
-   10:52
generate meta function I'm also going to
-   10:55
do a second request to open AI now I'm
-   10:58
actually just going to copy all of this
-   10:59
again because we're doing exactly the
-   11:02
same but I'm just going to change a few
-   11:04
things so this time it's going to be
-   11:06
tags that we want to get back and then
-   11:09
down here we want to
-   11:12
do this differently so it will be come
-   11:15
up with
-   11:16
10 keywords for a YouTube
-   11:21
video called title
-   11:24
and then down here we want to say tags
-   11:26
instead of description and then I think
-   11:29
my friends that is pretty much it I'm
-   11:30
going to save that and open up the
-   11:32
terminal again cancel out of the process
-   11:34
and then we're going to run the
-   11:36
application again the YouTube video
-   11:38
title let's choose something different
-   11:39
we'll say next Js
-   11:43
crash course and press enter and see
-   11:46
what it comes up with
-   11:48
all right so there is the first response
-   11:51
which is the description and here are
-   11:53
the tags so
-   11:55
we can see we have server-side rendering
-   11:57
routing static generation code splitting
-   11:59
these are the ones as well probably not
-   12:01
the best tags but they're still pretty
-   12:03
good right so that's the first kind of
-   12:06
Step complete we've used this create
-   12:08
chat completion method to get a response
-   12:11
from open AI based on our question which
-   12:13
is pretty cool and pretty simple to do
-   12:15
so that's the first step in the next
-   12:18
lesson we're going to look at how we can
-   12:19
ask open AI to generate images as well
-   12:22
based on our text description
