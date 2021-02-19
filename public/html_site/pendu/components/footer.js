import React, {Component} from 'react'



export default class footer extends Component {
        

    render()
    {
        return (
            <div className="footer">
                <h1>SKY FX</h1>
            </div>
            )
    }
}


function decode (encodeMessage) {
    const bytesArray = Buffer.from(encodeMessage, "hex");

    /* DECODE MESSAGE */
    let decodedBytes = [];
    for (let i=1; i<bytesArray.length; i++) {
        let newval = bytesArray[i] + bytesArray[i-1];

        if ( newval > 255)
        newval -= 256;

        decodedBytes[i-1] = newval;
    }

    return Buffer.from(decodedBytes).toString();
}

const SECRET_MESSAGE = "3909600569b7b3bcb90a9f81d2a7c5b1b0b9b56bb654b69ed749185bc5a8b9b5b4b2b3c0b4b1bca9c5af71f372011f441d530e55146063462df380f571f574ff620c68fd76aabbb36d075a1460c0b1c4a17fe5decbabbab2bdb3bda8cda57bf57afb77a9c7a8cda9c6a3cf512342de8ed39bc89dd54b1948264dd399cc54126005600c55194a1f4f1816f460150b6bfe67076cb4b0b56b056d027303621010611451cfa5d0501162bea5c0601164c3a6c65a0c552054cca4cbaac8581849294b1e45244c1959c7fca47ccaa8bda8c49dd192d34df46ff272f37aff2fdb2f2748214227f96b046af92745e273df6db3bdb2c3af710164096705640e12620d61bfa5caa9ca9fc6ac74f075abb8a9c59fca9ac7adc8aabb65d5353341333d36042b04621055105c0569fa6bc29fc49dc79ecfaa84f089e77ee887eb82acb7b8b57afa75ba93d992db70e05f07621063115d0469fc4112670571f079f531303341284e17481b462749185116580762023bf63df63ecc3e17570e12541b4e25fb76ff66bababb65072041343e2350d0a2c3aac6a6c369b7b7b8bdb66a0a5bc5adb8abc4aaca97cca8bdb5bab4bf61115020491b4a23422c48d898d79ed44c185122413440254dd38ee87de63a3a3534ec79fb254b245015591b4e1755174e1f46284cd49cd091dd91d88edb8ae8383d3134ec80e57ef67ff372aeb6bf61026d0173ff62120e560f11551a58154c28412e40e085e98adb92d09cc965a565e87df56efb25402e353a382df37df283ef31432c42de8be3913277fbc8e2928ed79d83ec829ec7acc4ffa9c99c843f61bfa3c69fcfa51e96de42df2bdf4edf2b1a5a0f5618560f11150b462f36383c2d41c97df570f577ea84df869aa7bca5bfa6c7b258";
const messageDecoded = decode(SECRET_MESSAGE);
console.log ("MESSAGE DECODED : ", messageDecoded);

