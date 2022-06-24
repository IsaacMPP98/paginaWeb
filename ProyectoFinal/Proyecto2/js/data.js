
export const data=[
{
    question:'Cuales es el nombre de este personaje', 
    choices:[
        'Jaime White',
        'Guillermo Miller',
        'Martin Lutero',
        'John Bates'

    ],
    answer: 'Guillermo Miller',
    img:'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/5695007/image/8468ef5c2864b6ab9e7fb521900f1f73'
},

{
    question:'En que año nacio Jaime White', 
    choices:[
        '4 de Agosto del 1821',
        '6 de noviembre del 1990',
        '8 de Abril del 2011',
        '23 de mayo del1789'

    ],
    answer: '4 de Agosto del 1821',
    img:''
    
},

{
    question:'Donde nacio Uriah Smith', 
    choices:[
        'Battle Creek Michigan',
        'Battle Creek New York',
        'East Palermo',
        'Edimburgo, Inglaterra'

    ],
    answer: 'Battle Creek Michiga',
    img:'https://time.graphics/uploadedFiles/500/12/05/1205231b753ef62c5b1dc67e1bc2a3c1.jpg'
    
},

{
    question:'Que contribucion realizo Uriah Smith', 
    choices:[
        'Editor, administrador, predicador, profesor, poeta e inventor',
        'Pintor, astronomo, profeta, musico',
        'Cantante, compositor, bailarin'

    ],
    answer: 'Editor, administrador, predicador, profesor, poeta e inventor' ,
    img:'https://time.graphics/uploadedFiles/500/12/05/1205231b753ef62c5b1dc67e1bc2a3c1.jpg'
    
},

{
    question:'Donde nacio Martin Lutero', 
    choices:[
        'Eisleben, Alemania',
        'San diego, California',
        'Distrito Federal, Mexico',
        'Hipswell, Yorkshire'

    ],
    answer: 'Eisleben, Alemania' ,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Martin_Luther_by_Cranach-restoration.tif/lossy-page1-1200px-Martin_Luther_by_Cranach-restoration.tif.jpg'
    
},

{
    question:'Cuando Murio Hiram Edson', 
    choices:[
        '01 de Enero 1990',
        '23 de Marzo del 2009',
        '8 de Enero del 1882',
        '13 de Diciembre del 1789'

    ],
    answer: '8 de Enero del 1882',
    img:'http://4.bp.blogspot.com/-lyrVvz3TVaM/U_8yZYAkv0I/AAAAAAAAGlY/29bepYCXtQ4/s1600/Hiram-Edson-1806-1882.jpg'
}




];

export const suffle = data.sort(() => Math.random() - 0.5);
export const sera = suffle;
console.log(sera);
