export default function fetch(url, method = 'GET') {
    const con = {
        method,
        body: JSON.stringify({a:1,b:2})
    }
    if(method === 'GET') {
        delete con.body
    }
    return window.fetch(url, con)
}