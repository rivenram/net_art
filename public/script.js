document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById ("cnv_id")

cnv.width = innerwidth
cnv.height = innerHeight


cnv.onpointerdown = () => {
    console.log ('interaction achieved !!')
}

console.dir (cnv)