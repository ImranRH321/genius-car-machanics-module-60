/*

1.create firebase app 
2.auth export kora 
3. pages >(home>Services,) about, login, shared > header, footer>daynamic year bosate hobe
4.home > services
5.img google search -- https://www.freepik.com/  -- img nite paro.
6.img google search -- https://unsplash.com/  -- img nite paro.
7.img optimize- https://www.photopea.com/ > image>image-size kora jay.
8.img optimize --https://tinypng.com/ ei website img resize kora jay.
8.file ar bitor contal shift m dile akta file create hobe.
9.link ------https://imgbb.com/----te img upload kore use korbe direk link dite hobe.
10. service json data programing hero githup a genius car machanics ar puplic ace.
11. kono akta poriborton hoyaei state. arrey defalut = [] , string ar default value = '', kono sonka jog kolre defult value 0, gon korle defalut value 1; 
12. useState - doita jinis dibe. 1 ak current state , 2. update State.
13. data jehoto load korba extranul hok ba public hok useEffect hook diye. react olara banai dice.
14.useEffect 2 ta perameta ney. 1 ak calback function, 2. dependenci[] atar mane akbar call kora hobe. jodi kono kico change , ba common kore img chagne kore mot kota joto bar change hobe depandenci toto bar call hobe. jodi kono dependenci dei.
15. services take data load kore map ar bitor service ar bitor pataci. name, img, descrepition, price dekaice.
16. agulo ke 3 ta cart item kore dekano
17.responsive media query.1 column max-width:576px , and minimum-width:577px; 2column
18.(min-width: 577px) and (max-width: 992px) . code.....





// ei 3 line work now
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
//

*/
