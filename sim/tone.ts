namespace pxsim.tone {


    export function startTransport() {
        Tone.Transport.start(0); // this is the current usage, not sure how to fix this in typings
    }

    // Not currently used. Event callback never fires, but no 404 errors...
    export function loadDrumSamplesAsync() : Promise<Tone.MultiPlayer> {
        return new Promise<Tone.MultiPlayer>((resolve, reject) => {
            var percussion = new Tone.MultiPlayer({
                urls : {
                    "kick"         : "/audio/percussion/kick.mp3",
                    "snare"        : "/audio/percussion/snare.mp3",
                    "hihat-closed" : "/audio/percussion/hh.mp3",
                    "hihat-open"   : "/audio/percussion/hh.mp3",
                    "cymbal"       : "/audio/percussion/hh.mp3"
                },
                volume  : -10,
                fadeOut : 0.1,
            }, (percussion) => {
                resolve(percussion);
            });            
        });            
    }   

    export function createMonoSynth() : Tone.MonoSynth {
        return new Tone.MonoSynth({oscillator: {
                                            type: "sine"
                                        },
                                        envelope: {
                                            attack: 0.005,
                                            decay: 0.1,
                                            sustain: 0.3,
                                            release: 1
                                        }});        
    }

    export function createPolySynth(voices: number) : Tone.PolySynth {
        let psynth = new Tone.PolySynth(voices, Tone.MonoSynth);     
        psynth.set("volume", -20);
        return psynth;   
    }

    export function createKickDrum() : Tone.MembraneSynth {
        return new Tone.MembraneSynth({"envelope" : {
                                            "sustain" : 0,
                                            "attack" : 0.02,
                                            "decay" : 0.8
                                        },
                                        "octaves" : 10
                                    });
    }     

}