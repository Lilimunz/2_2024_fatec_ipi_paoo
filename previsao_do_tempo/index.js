// require('dotenv').config()
// const axios = require('axios')
// //desestruturação - operador {}
// // para não ter q fazer isso const BASE_URL
// const {
//     PROTOCOL, 
//     BASE_URL, 
//     Q, 
//     APPID, 
//     CNT, 
//     UNITS, 
//     DESIRE_LANGUAGE
// } = process.env

// //montar esssa URL usando interpolação, ou seja, delimite s string com crase e ${}
// //const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&units=${UNITS}&lang=${DESIRE_LANGUAGE}`
// const vai = async () => {
//     const url =`${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&units=${UNITS}&lang=${DESIRE_LANGUAGE}`
//     const resultado = await axios.get(url)
//     for (let previsao of resultado.data.list){
//         console.log(`
//             Data: ${new Date(previsao.dt * 1000).toLocaleDateString()},   
//             Temp min: ${previsao.main.temp_min}\u00B0,
//             Temp max: ${previsao.main.temp_max}\u00b0,
//             Umidade: ${previsao.main.humidity}%,
//             Descrição: ${previsao.weather[0].description}
//             `)
//     }
// }
// vai()
// axios.get(url)
// .then((res) => {
//     //exibir o segundo texto:
//     //total de previsões: 4
//     console.log(`Total de previsões: ${res.data.cnt}`)
//     //console.log(res.data)
//     console.log('==========================================')
//     return res.data
// })
// .then((res) => {
//     //mostrar a sensação termica da primeira previsão do tempo
//     //console.log(`Sensação térmica da primera ${res.list[0].main.feels_like}°C`)
//     for(let previsao of res.list){
//         console.log(`Sensação térmica: ${previsao.main.feels_like}`)
//     }
//     console.log('==========================================')
//     return res
// })
// //1661871600 sistema de representação de datas - segundos passados
// .then((res) => {
//     for(let previsao of res.list){
//         console.log(new Date(previsao.dt * 1000).toLocaleString())
//         console.log('====================================')
//         return res.list
//     }
// })
// .then((res) => {
//     //iterar sobre a coleção de previsões, mostrando nascer e por do sol de cada uma
//  for (let previsao of res.list){
    // console.log(new Date(previsao.dt * 1000).toLocaleDateString())
    // console.log('======================================')
    // return (sunrise: res.city.sunrise, sunset: res.city.suncet)
    // }
// })
// .then((res) => {
//     console.log(`Nascer do Sol: ${new Date(res.sunrise *1000).toLocaleString()}`)
//     console.log(`Por do Sol: ${new Date(res.sunset *1000).toLocaleString()}`)
// })
