import axios from 'axios'

export function getbanner() {
	axios.get('http://app.mxzlw.cn/qiu/page/main.php?showRented=0').then((res) =>{
		console.log(res)
	})
}