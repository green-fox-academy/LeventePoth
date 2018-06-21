'use strict'

export class LLevi {
    anagram(something1: string, something2: string): boolean {
        if (something1.length != something2.length) {
            return false;
        }
        else {
            for (let i = 0; i < something1.length; i++) {
                for (let j = 0; j < something2.length; j++) {
                    if (something1.charAt(i) === something2.charAt(j)) {

                    }
                }
            }
            return true
        }
    }
}