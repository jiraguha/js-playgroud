export function hello(name: string){
    if(name != null){
      console.log(`Hello dear ${name}`)
    }
    else{
      console.error('No name was given')
    }
}
