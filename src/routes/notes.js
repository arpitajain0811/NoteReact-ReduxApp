const Models = require('../../models');
const addNotesToTable = (notesArray) => {
    const promiseArray = [];
    notesArray.forEach((note) => {
      const promise = new Promise((resolve) => {
        Models.notes.create({
          noteId: note.noteId,
          noteTitle: note.noteTitle,
          noteBody: note.noteBody,
        });
        resolve(note);
      });
      promiseArray.push(promise);
    });
    return promiseArray;
  };
const route = [
    {
      method: 'GET',
      path: '/notes',
      handler: (request,response)=>{
        Models.notes.findAll().then((result) => {
            response(result);
          });
      }
    },
    {
        method: 'PUT',
        path:'/notes',
        handler:(request, response)=>{
            Models.notes.destroy({ truncate: true }).then(() => {
                // console.log(request);
                const promiseArray= addNotesToTable(request.payload);
                Promise.all(promiseArray).then(()=>{
                    response({
                        statusCode: 201,
                    message: 'Notes added to database',
                    })
                })
            });
        }
    }
]
module.exports= route;