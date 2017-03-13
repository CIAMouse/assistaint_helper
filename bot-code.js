// © David Herrera, 2017
// All Rights Reserved
function MessageHandler(context, event) {
  if(event.message === '[help]')
    context.sendResponse("_Hi. I'm your project and event manger, messege me `[commands]` for a list of commands_" + "\n\n>_*This bot was created by Dave Diaz.*_");
}

function EventHandler(context, event) {
    
}

function HttpResponseHandler(context, event) {
    
}

function DbGetHandler(context, event) {
   
}

function DbPutHandler(context, event) {
  
}
