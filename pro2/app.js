let data =[
    {
        name: 'Mercury',
        age: '1st'
    },
    {
        name: 'Venus',
        age: '2nd'
    },
    {
        name: 'Earth',
        age: '3rd'
    },
    {
        name: 'Mars',
        age: '4th'
    },
    {
        name: 'Jupiter',
        age: '5th'
    },
    {
        name: 'Saturn',
        age: '6th'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item)
{
    return( 
        '<div>' + item.name + ' ' + 'is ' + item.age + ' in line' + '</div>'
        
    )});

info.innerHTML = details.join('\n');