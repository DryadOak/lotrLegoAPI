class SetConstructor{
    constructor(setName, setNumber, pieceCount, RRP, currentValue, minifigures, bricklink, ebay, setImage){
        this.setName = setName
        this.setNumber =setNumber
        this.pieceCount = pieceCount
        this.RRP = RRP
        this.currentValue = currentValue
        this.minifigures = minifigures
        this.bricklink = bricklink
        this.ebay = ebay
        this.instructions = `https://www.lego.com/en-gb/service/buildinginstructions/${this.setNumber}`
        this.setImage = setImage
    }
}

const sets = {
    notFound: {
        setName: 'Not Found',
        setNumber: 'Not Found',
        pieceCount: 0,
        RRP: 0,
        currentValue: 0,
        minifigures: 0,
        bricklink: 'Not Found',
        ebay: 'Not Found',
        instructions: 'Not Found',
        setImage: 'https://live.staticflickr.com/65535/52736861733_3bf92cbfcb_b.jpg'
    },
    9469: {
        setName: 'gandalf arrives',
        setNumber: '9469',
        pieceCount: 83,
        RRP: 11.99,
        currentValue: 25,
        minifigures: 2,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=9469-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%209469&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/9469',
        setImage: 'https://images.brickset.com/sets/large/9469-1.jpg?201202260353'
    },
    9470: {
        setName: 'shelob attacks',
        setNumber: '9470',
        pieceCount: 227,
        RRP: 19.99,
        currentValue: 30.25,
        minifigures: 3,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=9470-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%209470&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/9470',
        setImage: 'https://images.brickset.com/sets/large/9470-1.jpg?201206070409'
    },
    9471: {
        setName: 'uruk-hai army',
        setNumber: '9471',
        pieceCount: 257,
        RRP: 29.99,
        currentValue: 44.50,
        minifigures: 4,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=9471-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%209471&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/9471',
        setImage: 'https://images.brickset.com/sets/large/9471-1.jpg?201206070409'
    },
    9472: {
        setName: 'attack on weathertop',
        setNumber: '9472',
        pieceCount: 430,
        RRP: 49.99,
        currentValue: 81.92,
        minifigures: 5,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=9472-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%209472&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/9472',
        setImage: 'https://images.brickset.com/sets/large/9472-1.jpg?201206070409'
    },
    9473: {
        setName: 'the mines of moria',
        setNumber: '9473',
        pieceCount: 776,
        RRP: 79.99,
        currentValue: 139.45,
        minifigures: 9,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=9473-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%209473&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/9473',
        setImage: 'https://images.brickset.com/sets/large/9473-1.jpg?201206070409'
    },
    9474: {
        setName: 'the battle of helm\'s deep',
        setNumber: '9474',
        pieceCount: 1368,
        RRP: 99.99,
        currentValue: 250,
        minifigures: 8,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=9474-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%209474&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/9474',
        setImage: 'https://images.brickset.com/sets/large/9474-1.jpg?201206070409'
    },
    9476: {
        setName: 'the orc forge',
        setNumber: '9476',
        pieceCount: 363,
        RRP: 39.99,
        currentValue: 49.20,
        minifigures: 4,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=9476-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%209476&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/9476',
        setImage: 'https://images.brickset.com/sets/large/9476-1.jpg?201202260353'
    },
    10237: {
        setName: 'tower of orthanc',
        setNumber: '10237',
        pieceCount: 2359,
        RRP: 199.99,
        currentValue: 300,
        minifigures: 5,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=10237-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2010237&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/10237',
        setImage: 'https://images.brickset.com/sets/large/10237-1.jpg?201302260353'
    }, 
    30210: {
        setName: 'frodo with cooking corner',
        setNumber: '30210',
        pieceCount: 33,
        RRP: 3.99,
        currentValue: 7.75,
        minifigures: 1,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=30210-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2030210&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/30210',
        setImage: 'https://images.brickset.com/sets/large/30210-1.jpg?201202260353'
    },
    30211: {
        setName: 'uruk-hai with ballista',
        setNumber: '30211',
        pieceCount: 21,
        RRP: 4.0,
        currentValue: 15,
        minifigures: 1,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=30211-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2030211&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/30211',
        setImage: 'https://images.brickset.com/sets/large/30211-1.jpg?201202260353'
    },
    79005: {
        setName: 'the wizard battle',
        setNumber: '79005',
        pieceCount: 113,
        RRP: 12.99,
        currentValue: 40.25,
        minifigures: 2,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=79005-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2079005&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/79005',
        setImage: 'https://images.brickset.com/sets/large/79005-1.jpg?201202260353'
    },
    79006: {
        setName: 'the council of elrond',
        setNumber: '79006',
        pieceCount: 243,
        RRP: 29.99,
        currentValue: 65.58,
        minifigures: 4,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=79006-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2079006&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/79006',
        setImage: 'https://images.brickset.com/sets/large/79006-1.jpg?201306200720'
    },
    79007: {
        setName: 'battle at the black gate',
        setNumber: '79007',
        pieceCount: 656,
        RRP: 59.99,
        currentValue: 210.50,
        minifigures: 5,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=79007-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2079007&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/79007',
        setImage: 'https://images.brickset.com/sets/large/79007-1.jpg?201306200720'
    },
    79008: {
        setName: 'pirate ship ambush',
        setNumber: '79008',
        pieceCount: 756,
        RRP: 99.99,
        currentValue: 228,
        minifigures: 9,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=79008-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2079008-1&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/79008',
        setImage: 'https://images.brickset.com/sets/large/79008-1.jpg?201302101044'
    },
    5000202: {
        setName: 'elrond',
        setNumber: '5000202',
        pieceCount: 6,
        RRP: 0.00,
        currentValue: 14.99,
        minifigures: 1,
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=5000202-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%205000202&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'N/A',
        setImage: 'https://images.brickset.com/sets/large/5000202-1.jpg?201503130234'
    },
    10316: {
        setName: 'rivendell',
        setNumber: '10316',
        pieceCount: 6167,
        RRP: 429.99,
        currentValue: 429.99,
        minifigures: 15,
        bricklink: 'https://www.bricklink.com/v2/search.page?q=rivendell%2010316#T=A',
        ebay: 'https://www.ebay.co.uk/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=LEGO+10316&_sacat=0&LH_TitleDesc=0&toolid=10001&mkcid=1&campid=5337239603&kw=LEGO+10237&LH_PrefLoc=2&mkrid=710-53481-19255-0',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/10316',
        setImage: 'https://www.lego.com/cdn/cs/set/assets/bltec012c948c003fba/10316_alt16.png?format=webply&fit=bounds&quality=70&width=960&height=960&dpr=1.5'
      },
    40630: {
        setName: 'frodo and gollum',
        setNumber: '40630',
        pieceCount: 184,
        RRP: 14.99,
        currentValue: 14.99,
        minifigures: 'N/A',
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=40630-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2040630&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/40630',
        setImage: 'https://images.brickset.com/sets/large/40630-1.jpg?202205121146'
    },
    40631: {
        setName: 'gandalf the grey and balrog',
        setNumber: '40631',
        pieceCount: 348,
        RRP: 19.99,
        currentValue: 19.99,
        minifigures: 'N/A',
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=40631-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2040631&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/40631',
        setImage: 'https://images.brickset.com/sets/large/40631-1.jpg?202205121146'
    },
    40632: {
        setName: 'aragorn & arwen',
        setNumber: '40632',
        pieceCount: 261,
        RRP: 19.99,
        currentValue: 19.99,
        minifigures: 'N/A',
        bricklink: 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=40632-1#T=S&O={%22ss%22:%22UK%22}',
        ebay: 'https://www.ebay.co.uk/sch/?kw=LEGO%2040632&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5337239603&toolid=10001',
        instructions: 'https://www.lego.com/en-gb/service/buildinginstructions/40632',
        setImage: 'https://images.brickset.com/sets/large/40632-1.jpg?202205121146'
    }      
};



const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:setNumber', (req, res) => {
    const setNumber = req.params.setNumber
    sets[setNumber] ? res.json(sets[setNumber]) : res.json(sets.notFound)
        
    
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})