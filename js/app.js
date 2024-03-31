


let twitter = [
  
    {
        tweet: 'many are called but few are choosing',
        username: 'Maureen', 
        created_at:   'october-fourth-2010',
        age: 25,
    
    },


    {
        tweet: 'Never give up on life',
        username: 'Elvis', 
        created_at:   'January-fifth-2002',
        age: 16,
    
    },


    {
        tweet: 'Do not trust the technology, have backup',
        username: 'Alain', 
        created_at:   'February-tenth-2012',
        age: 29,
    
    },

    {
        tweet: 'This will be apllicable for the first time',
        username: 'Junas', 
        created_at:   'August-fourth-2015',
        age: 30,
    
    },

    {
        tweet: 'However, the benefits are fanstatic',
        username: 'Genuis', 
        created_at:   'March-eleventh-2019',
        age: 15,
    
    },


    {
        tweet: 'Being paid for the content you are producing, it makes you feel valued',
        username: 'Tara', 
        created_at:   'Aprilr-fourth-2020',
        age: 27,
    
    },

    {
        tweet: 'This guy will not be in the majors until next year, so do not worry about it',
        username: 'Joe', 
        created_at:   'September-ninth-2021',
        age: 17,
    
    },

    {
        tweet: 'It dose not matter what they say, keep moving',
        username: 'Emile', 
        created_at:   'November-fourth-2023',
        age: 28,
    
    },

    {
        tweet: 'I wish i could go back and enjoy some memories the second time',
        username: 'Esther', 
        created_at:   'December-sixth-2024',
        age: 34,
    
    },

    {
        tweet: 'you have to let those old things go and live',
        username: 'Jaja', 
        created_at:   'January-eigth-2016',
        age: 40,
    
    },
    


]


let i = 0;
while(i < twitter.length){
    let tweet = twitter[i];
    if(tweet.age >= 18){
        console.log(`${tweet['tweet']}, ${tweet['username']}, ${tweet['created_at']}`);
    }
    i++;
}


for(let i = 0; i < twitter.length; i++){
    let twits = twitter[i];
    if(twits.age <= 18){
        console.log(`${twits['tweet']}, ${twits['username']}, ${twits['created_at']}`)
    }
    i++;
}