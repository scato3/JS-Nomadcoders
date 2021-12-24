const quotes = [
{
    quote: "테란은 사기다",
    author: "이혜빈",
},
{
    quote: "테란을 고른것도 실력이다.",
    author: "송병구",
},
{
    quote: "하루에 3시간씩 1달이면 테란을 마스터한다.",
    author: "사무엘존슨",
},
{
    quote: "언제나 테란에 집중할수 있다면 행복할 것이다",
    author: "파울로 코엘료",
},
{
    quote: "진정으로 웃으려면 테란을 해야해..",
    author: "찰리 채플린",
},
{
    quote: "테란에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드",
},
{
    quote: "테란은 유저를 결코 버리지 않는다",
    author: "켄러",
},
{
    quote: "피할수 없으면 테란해라 ",
    author: "로버트 엘리엇",
},
{
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로"
}]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author