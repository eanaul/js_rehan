

const arrayEhan = ['🌭','🍔','🍕','🍟'] // length = 5

const pizza = arrayEhan.includes('🍕')



if(pizza){
	const posisiPizza = arrayEhan.indexOf('🍕')
	const indexBefore = posisiPizza - 1
	const indexAfter = posisiPizza + 1
	const before = arrayEhan[indexBefore]
	const after = arrayEhan[indexAfter]
	console.log(`junkfood sebelum pizza adalah ${before}`)
	console.log(`junkfood setelah pizza adalah ${after}`)
	const junkAwal = arrayEhan.shift()
	console.log(`junkfood awal adalah ${junkAwal}`)
	const junkAkhir = arrayEhan.pop()

} else{
	console.log ('saya gatau posisinya dimana')
}