function getIsFirstUse() {
    return window.localStorage.getItem('is-first-use') !== 'true'
}

function setIsFirstUse(v: boolean) {
    window.localStorage.setItem('is-first-use', v ? 'true' : 'false')
}

export const isFirstUseModel = {
    getIsFirstUse,
    setIsFirstUse,
}