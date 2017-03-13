// © David Herrera, 2017
// All Rights Reserved
function MessageHandler(context, event) {
  if(event.message === '[help]')
    context.sendResponse("_Hi. I'm your project and event manger, messege me `[Commands]` for a list of commands_" + "\n\n>_*This bot was created by Dave Diaz.*_");

if(event.message === '[Commands]')
   context.sendResponse("_Listing Commands....._" + "\n\n>*`[Current-Events]`:* _Lists all events planned or scheduled for that day or week._" + "\n\n>*`[Projects-A]`:* _Lists all graphic request for Artists._" + "\n\n>*`[Projects-B]`:* _Lists all projects for Builders._" );

//Builder Code
if(event.message === '[Projects-B]')
  context.sendResponse("_Listing Current Projects for Builders....._" + "\n\n`P1` *Harry Potter Themed Map*: _Due: March 20, 2017_" + "\n\n>*For tasks on a certian project, message:* `[Project_Info] projectCode`");

if(event.message === '[Project_Info] P1')
 context.sendResponse("_Listing all info for `P1`...._ " + "\n\n>*Project Name:* SG Harry Potter" + "\n\n>*Description:* This build will most likely also go on CTF, but for now, it is planned for SG. We will be building Hogwarts Castle, Dark Forest, and Hogsmeade. Anyone who does not have experience with Harry Potter, consider seeing some images (just search them on Google). See images below for getting started." + "\n\n>>>*Map Details:* \n\n -Map is 512x512 Blocks \n\n -Map Boundaries: -30 20 -1823 to -544 20 -1312 \n\n -Center of Spawn (Fountain Courtyard): -311 20 -1556 \n\n - Dark Forest should not have leaves, just dark oak wood and other oak wood. \n\n - Possible NPCs and/or particles representing magic? \n\n - This project is NOT public information." + ">>>*Attachments:* \n\n *Link 1:* https://www.youtube.com/watch?v=1ftVC8vNWAY&feature=youtu.be \n\n *Link 2:* http://imgur.com/a/M0V1C  ");
//Artist Code
if(event.message === '[Projects-A]')
   context.sendResponse("_Listing all current graphic requests....._" + "\n\n`G1` *Youtube Banner:* _Due: March 31, 2017_" + "\n\n>*For info on certian requests, message:* `[Graphic_Info] graphicNumber`");

if(event.message === '[Graphic_Info] G1')
  context.sendResponse("_Listing all info for `G1`...._" + "\n\n>*Status:* Open" + "\n\n>*Name Of Requester:* Frost" + "\n\n>*Graphic Needed:* I am looking a drawn banner for our channel for the first month. Example https://lifeboatcrew.slack.com/files/mrchocochip/F4AE9FEMN/1488233416477.png Except for like a banner." + "\n\n>*Date Needed:* March 31, 2017");

//Events
if(event.message === '[Current-Events]')
context.sendResponse("_Listing current events...._" + "\n\n>>>*ESports:* \n\n *-Time:* 4:30 CST \n\n *-Date:* Everyday");


}
function EventHandler(context, event) {
    
}

function HttpResponseHandler(context, event) {
    
}

function DbGetHandler(context, event) {
   
}

function DbPutHandler(context, event) {
  
}
