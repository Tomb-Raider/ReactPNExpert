export default function loadScript(id, url, callback) {
    let script = document.getElementById(id)

    if (script != null) {
        return
    }

    console.log(`Loading script: [${id}]...`)

    script = document.createElement('script')
    script.async = true
    script.src = url
    script.id = id

    document.body.appendChild(script)

    script.onload = _ => {
        console.log(`Script loaded: [${id}].`)
        callback()
    }
}
