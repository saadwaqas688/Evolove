export function getBasePath(url){
    let parts=url.split("/");
    return  parts[1]
}