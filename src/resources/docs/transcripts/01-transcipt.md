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

# Transcript for OpenAI Tutorial #1 - Intro & Setup

<br />
<br />

0:00
hey there gang and welcome to the very
0:01
first lesson in this open AI Basics
0:03
tutorial
0:06
[Music]
0:09
all right so obviously there's been
0:11
quite a bit of hype around Ai and chat
0:13
GPT and things like that in the last six
0:15
months and a lot of the stuff it can do
0:17
now is incredible and it's probably here
0:19
for the Long Haul so I wanted to make a
0:21
tutorial about how to get started as a
0:23
developer when it comes to taking
0:24
advantage of some of the things that AI
0:26
can do for us and to do this we're going
0:28
to be using open AI which is the AI lab
0:30
that created chat GPT which I'm sure
0:33
you're already familiar with they also
0:35
created Dali an image generator and
0:37
other things like whisper which is a
0:39
speech translation and recognition tool
0:42
so we're going to be leveraging open
0:44
ai's API to create our own little AI
0:47
driven project which is going to
0:49
generate a video description and tags
0:51
for US based on a video title that we
0:54
Supply it with so this might be useful
0:56
if you're uploading YouTube videos
0:57
regularly like me and you just can't be
1:00
asked making all the metadata yourself
1:01
we're also going to take a look at image
1:03
generation as well down here so we come
1:06
up with a description of an image and
1:08
then open AI is going to generate an
1:10
image for US based on that description
1:12
so this is the application we're going
1:14
to be building in this series and it
1:16
consists of a front end which is what
1:18
we're looking at here as well as a back
1:20
end and the back end is going to be an
1:22
Express app that does all the
1:24
communicating with open AI to get these
1:25
responses so hopefully by making this
1:28
little project you're going to get a
1:29
good grasp of using open AI so you can
1:31
then use it in your own applications now
1:33
before you do start the series I would
1:35
expect you to already have a decent
1:36
grasp of JavaScript because that's what
1:38
we'll be using to make our back end
1:39
along with node.js as well so so if you
1:43
need a refresher on those things then
1:44
I've got courses about both of those
1:46
things on YouTube and on net Ninja Pro
1:48
so I'll leave the links to both of them
1:50
down below the video otherwise you're
1:52
pretty much good to go and before we go
1:54
any further I just want to quickly
1:56
mention that all of the course files are
1:57
here up on GitHub at this repo open AI
2:00
Basics so I will leave this link down
2:02
below now each lesson has its own branch
2:05
in the repo so if you want to see the
2:07
lesson three code for example select
2:09
lesson three from the branch drop down
2:10
all of the files and folders are right
2:12
here you can download The Code by going
2:14
to the code button and then downloading
2:16
a zip alright then so time to start this
2:19
project now I've already opened up a new
2:21
folder inside vs code called open AI
2:23
hyphen YT and I've opened up the
2:26
terminal we're going to say npm init to
2:28
start a new node project and get that
2:30
package.json file so let's enter through
2:33
some of these the entry file is going to
2:35
be app.js test command enter enter is
2:39
this okay yeah that's fine okay so now
2:42
we have our package.json file
2:45
now what I'd like to do is just make as
2:47
well the app.js file so this is the kind
2:51
of entry point for the application and
2:53
then we'll just do a simple
2:54
console.login here to say hello Ninjas
2:58
just so we can run this and see
2:59
something in the terminal so clear this
3:02
and then to run this we say n or rather
3:04
node and then the name of the file which
3:06
is app and we should see hello Ninjas
3:08
awesome so this is all working next we
3:11
need to connect to open AI from this
3:14
project so in order to do that the first
3:16
thing you need to do is create an
3:17
account at openai.com I've already done
3:20
that so I'll log in then you need to
3:23
choose API since we're using the API and
3:25
you can go to documentation to see how
3:27
we get started now before we do that I
3:29
want to mention you do have to pay for
3:31
using the open AI API but it is really
3:34
affordable if I go to my account if I go
3:38
to view API keys and then go to usage
3:41
you can see this is how much I've spent
3:44
since the 22nd of May it is now the 31st
3:47
of May when I'm recording this so over
3:50
the last week and a bit I've spent less
3:52
than a dollar and I've used it pretty
3:55
much every day so
3:56
it is really affordable and when you
3:58
first sign up they do give you some free
4:00
credit to play around with which lasts I
4:02
think up to three months so certainly
4:04
doing this tutorial and then doing some
4:05
of your own little projects you're not
4:07
going to spend a thing but you do have
4:08
to pay thereafter anyway if we go to the
4:12
documentation and then go down to
4:15
libraries we're using the node Library
4:17
so click on that and you can see the
4:19
first thing we need to do is install
4:21
open AI
4:23
also we need to then Connect openai
4:25
using this configuration thing right
4:28
here so we grab that from open AI as
4:30
well as this thing the open AI API and
4:34
we connect to it
4:35
now inside this configuration we do need
4:38
to pass in our API key now in order to
4:41
get that go to your account over here
4:43
view API Keys I've got one here that I'm
4:46
going to use you can create one by
4:48
clicking that don't use mine because
4:50
it's going to be deleted long before you
4:52
watch this tutorial but create a new one
4:55
by clicking on this give it a name and
4:57
then create the secret key then it's
4:59
going to show you the secret key you
5:00
need to copy that and make sure you put
5:03
it somewhere like in notepad for now
5:04
because as soon as you close the window
5:06
you're not going to be able to see it
5:08
again all right so I'm going to cancel
5:10
out of this so now we have our key and
5:13
we know we need to install
5:16
this open AI library and then this is
5:18
how we connect to it right here let's go
5:21
and do that in our project okay so first
5:23
let's install the Open Air library so
5:25
we'll say npm install open AI I'm also
5:29
going to install dot EnV because we're
5:31
going to use environment variables
5:34
for our key so press enter to install
5:36
both of those
5:37
all right cool so now what I'm going to
5:39
do is create a new folder up here and
5:42
I'm going to call that config and I'm
5:44
going to place a new file inside this
5:46
folder called open AI
5:49
config.js now you don't have to do your
5:52
connection to open AI inside this file
5:54
you can do it inside app.js if you want
5:56
I'm just trying to organize things a
5:58
little bit better
5:59
so inside here we need to require a
6:02
couple of things from the open AI
6:03
package so I'm going to say const and
6:06
the two things we need are configuration
6:09
and open
6:11
AI
6:14
and then it's API like so okay and we
6:17
set that equal to Relic wire
6:20
open AI so we're importing these two
6:24
things right here and we can use them
6:25
down here now so we'll say const
6:28
configuration
6:30
is equal to new configuration this is
6:34
just the code that we saw in the docs a
6:35
minute ago so you can refer back to that
6:38
if you need to and then we pass in here
6:39
our API key now I could paste it in here
6:43
if I wanted to that's my key however I'm
6:45
not going to do that instead I'm going
6:47
to use a DOT EnV file to create an
6:50
environment variable so dot EnV and then
6:53
inside here I'm going to call this open
6:55
underscore AI key and I'm going to set
6:58
that equal
6:59
to my key so now because we installed
7:03
that dot EnV package
7:05
I can come down here and I also want to
7:07
say require
7:09
dots
7:10
EnV and then from that we can just use
7:13
the config method directly and when we
7:16
do that any variables that we have
7:19
inside here are going to become
7:20
available to us on the process object so
7:23
I can now say process
7:25
dot EnV dot open
7:30
AI key and it's going to grab that value
7:33
for us now this one right here and place
7:35
it right here so now we have our new
7:37
configuration object now we can say
7:40
const
7:43
open AI is equal to new open
7:48
AI
7:49
API
7:51
and then pass in the configuration
7:52
object right here so it will then be
7:55
this constant that we use to perform any
7:59
kind of action with openai so if we want
8:01
to generate a new image we would use
8:03
this object and a method on that object
8:05
to do that okay
8:07
so since we'll be using this object in
8:10
other files let's export it by saying
8:12
module.exports and set it equal to open
8:16
AI like so all right and that is now the
8:19
setup pretty much complete we're
8:21
connecting to open Ai and now we can use
8:23
this object to communicate with it to do
8:25
things for us like generate text
8:26
responses based on our questions or
8:28
generate images based on our text
8:30
description so we're going to start that
8:32
process in the next lesson by the way if
8:35
you want to watch this entire course now
8:37
without YouTube adverts you can do it's
8:39
all up on the net ninja website
8:41
netninja.dev you can buy the course for
8:43
two dollars to get instant access to all
8:46
of it or you can sign up to net Ninja
8:48
Pro and get instant access to all of my
8:50
courses without adverts as well as
8:52
premium courses not found on YouTube
8:54
including my udemy ones that's nine
8:57
dollars a month and you can get your
8:58
first month half price when you use this
9:01
promo code right here so I'm going to
9:03
leave this link Down Below in the video
9:05
description for you to sign up and I
9:07
really hope you enjoyed this series and
9:08
please do not forget to share subscribe
9:10
and like the videos that really helps a
9:13
lot and I'm going to see you in the very
9:14
next lesson
9:18
[Music]
9:29
foreign
9:30
[Music]
9:30
[Applause]
