console.log('linked');
const genreFilter = document.querySelector("#genreFilter");
const searchFilter = document.querySelector("#searchFilter");


let objectArray = [
    {
        id: 123,
        artist: 'Hiatus Kaiyote',
        album: 'Choose Your Weapon',
        price: 25,
        image:'./haitus.jpeg',
        genre:'rnb',
        tags: ['hiatus'],
        showAll: 'all'
    },
    {
        id: 456,
        artist: 'Miles Davis',
        album: 'Kind Of Blue',
        price: 49.95,
        image:'./miles.jpeg',
        genre:'jazz',
        tags: ['miles','davis','miles davis'],
        showAll: 'all'
    },
    {
        id: 678,
        artist: 'Tyler The Creator',
        album: 'Igor',
        price: 30,
        image:'./tyler.jpeg',
        genre:'jazz',
        tags: ['tyler', 'creator'],
        showAll: 'all'
    },
    {
        id: 462,
        artist: 'Ziggy Alberts',
        album: 'Laps Around The Sun',
        price: 51.95 ,
        image:'./ziggy.jpeg',
        genre:'folk',
        tags: ['ziggy'],
        showAll: 'all'
    },
    {
        id: 173,
        artist: 'J Cole',
        album: 'KOD',
        price: 45.00 ,
        image:'./jcole.jpeg',
        genre:'rap',
        tags: ['cole'],
        showAll: 'all'
    }
];

// start of modal
function modal(){
    $(".moreInformation").click(function(){
        // console.log("clicked");
        let i = 0;
        for(i = 0; i<objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                // console.log(objectArray[i].artist);
                // one way to clear data is use the jquery function
                // empty() - it removes all child nodes from the selected element
                $("#objectArrayModalInfo").empty().append(
                    `
                       <h2 class="modalTitle">${objectArray[i].artist}</h2>
                    `
                );
            }
        }
    });
}
// end of modal

function objectsLoop(){
    let i = 0;
    for(i = 0; i<objectArray.length; i++){
        generateCard(i);
    }
    modal();
};
objectsLoop();

// genre filter function
    function filterGenre(event){
        $('#cardContent').empty();
        event.preventDefault();
        let selectedGenres = [];
        // start of value check
        console.log(selectedGenres);
        $('input[name="genre"]:checked').each( function(){
           selectedGenres.push(this.value); 
        });
        console.log(selectedGenres);
        // end of value check
        let i = 0;
        // start of selcted Genre loop
        for(i = 0; i < selectedGenres.length; i++){

            if(selectedGenres[i] === 'jazz'){
               let i = 0;
               for(i = 0; i<objectArray.length; i++){
                    //    start of if statment
                    // check to see if genre is equal to jazz
                    if(objectArray[i].genre === 'jazz'){
                            //    start of append
                            generateCard(i);
                            // end of append
                    };
                        //    end of if statment
               }
            }
            if(selectedGenres[i] === 'rap'){
                let i = 0;
               for(i = 0; i<objectArray.length; i++){
                    //    start of if statment
                    // check to see if genre is equal to jazz
                    if(objectArray[i].genre === 'rap'){
                            //    start of append
                            generateCard(i);
                            // end of append
                    };
                        //    end of if statment
               }
            }
            if(selectedGenres[i] === 'folk'){
                let i = 0;
               for(i = 0; i<objectArray.length; i++){
                    //    start of if statment
                    // check to see if genre is equal to jazz
                    if(objectArray[i].genre === 'folk'){
                            //    start of append
                            generateCard(i);
                            // end of append
                    };
                        //    end of if statment
               }
            }
            if(selectedGenres[i] === 'rnb'){
                let i = 0;
               for(i = 0; i<objectArray.length; i++){
                    //    start of if statment
                    // check to see if genre is equal to jazz
                    if(objectArray[i].genre === 'rnb'){
                            //    start of append
                            generateCard(i);
                            // end of append
                    };
                        //    end of if statment
               }
            }

        };
        // end of selected genre loop
        modal();
    };
// end of genre filter function


// =====================================
// start of search functions
// =====================================

    function filterSearchWord(){

        // the prop() method sets or returs properties and values of selected elements
        $('input[type=checkbox]').prop('checked',false);


        console.log('clicked');
        let searchWord = $('#searchWord').val();
        // console.log(searchWord);
        filterByWord(searchWord);
        $('input[name=search]').val('');
    };
    
    function filterByWord(word){
        $('#cardContent').empty();
        let i,j;
        for(i = 0; i<objectArray.length; i++){
            for(j = 0; j<objectArray[i].tags.length; j++){
                // the toLowerCase() turns string characters to lower case
                if(word.toLowerCase() === objectArray[i].tags[j]){
                    generateCard(i);
                    modal();
                }
            }
        }
        if(word === ''){
            noInput();
        }
    }
    function noInput(){
        for(let i = 0; i <objectArray.length; i++){
            generateCard(i);
        }
    }


// =====================================
// end of search functions
// =====================================




// =====================================
// start of alphabetical search
// =====================================


    $('#sortBtn').change(function(){
        // value of our selection
        let sortValue = ($('#sortBtn').val()).toLowerCase();
        console.log(sortValue);
        // creating a conditional statement to check what value we have generated
        if((sortValue === 'artist') || (sortValue === 'album')){
            // console.log('is equal');
            // then passing our sortValue variable through the use of parameters into our sortByAscending function
            sortByAscending(sortValue);
        }
    });

    function sortByAscending(sortOrder){
        // recieves the value and logs it within our sortOrder
            console.log(sortOrder);

            // let sortExample = ['g', 'b', 'z', 'a'];
            // console.log(sortExample)
            // hover over sort function for discription
            // console.log(sortExample.sort());

            // grabbing our object array and sorting through that based on filter value
            objectArray.sort(function(a,b){
                // switch stament
                // filter through values that we get from our dropdown
                // comparing our properties to one another to check asending order
               
                // let itemA;
                // let itemB;

                // running a switch using case based on value recived
                switch(sortOrder){
                    case 'artist':
                      var itemA = a.artist.toLowerCase(), itemB = b.artist.toLowerCase();
                        break;
                    case 'album':
                        console.log('album');
                        var itemA = a.album.toLowerCase(), itemB = b.album.toLowerCase();
                        break;
                    case 'genre':
                        var itemA = a.genre.toLowerCase(), itemB = b.genre.toLowerCase();
                        break;
                    default:
                        console.log('not matching');
                };
                // end of switch statment

                // creating conditions to to check if a value is less than or grater 
                // to allow for the items to sort alphabetically
                if(itemA < itemB){
                    return -1;
                    // false
                }
                if(itemA > itemB){
                    return 1;
                    // true
                }
            });
            // end of sort
            console.log(objectArray);
            // append our cards
            allCards();
    }
        


// =====================================
// end of alphabetical search
// =====================================

// =====================================
// start of refresh btn
// =====================================

    $('#refresh').click(function(){
        $('cardContent').empty();
        $('input[type=checkbox]').prop('checked',false);
        allCards();
    });

// =====================================
// end of refresh btn
// =====================================

function allCards(){
    $('#cardContent').empty();
    for(let i =0; i <objectArray.length; i++){
        generateCard(i);
    }
}













// =====================================
// start of card generator
// =====================================
function generateCard(x){
    // let x = i;
    $('#cardContent').append(
        `
                <div class="card card--style" style="width: 18rem;">
                    <div class="img-container">
                    <img class="card-img-top" src="${objectArray[x].image}" alt="Card image cap">
                    </div>    
                    <div class="card-body">
                        <h5 class="card-title">${objectArray[x].artist}</h5>
                        <p class="card-text">${objectArray[x].album}</p>
                        <p class="card-text">$${objectArray[x].price}</p>
                        <button id="${objectArray[x].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                            more info
                        </button>
                    </div>
                </div>  
        `
    );
}

// =====================================
// end of card generator
// =====================================

genreFilter.addEventListener("click", filterGenre);
searchFilter.addEventListener("click", filterSearchWord);