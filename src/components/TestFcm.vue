<script>
import { inject, ref } from 'vue'
import { usePush } from 'notivue'

export default {
    //options api
    inject: ['messaging'],
    mounted() {
        console.log('Firebase cloud messaging object', this.$messaging)
    },
    //composition api
    setup() {
        const messaging = inject('messaging')
        const token = ref(null)
        // const push = usePush()

        console.log('Firebase cloud messaging object', messaging)

        messaging
            .getToken({
                vapidKey:
                    "BHNRgBUcCtWxBC-T3PMMvrqltP0QlwaiSIvVC2xTzA0ZqsqgZ9GpagxmgwEdDfTpdVxXvU29AqNsUR--GF-ELPY",
            })
            .then((currentToken) => {
                if (currentToken) {
                    token.value = currentToken
                    console.log("client token", currentToken);
                } else {
                    console.log(
                        "No registration token available. Request permission to generate one."
                    );
                }
            })
            .catch((err) => {
                console.log("An error occurred while retrieving token. ", err);
            });

        const copyToClipboard = async (value) => {

            try {
                await navigator.clipboard.writeText(value);
                alert('Content copied to clipboard')
            } catch (err) {
                alert('Failed to copy: ', err);
            }

        }


        return {
            token,
            copyToClipboard
        }
    }
}
</script>



<template>
    <h1>test fcm</h1>
    {{ token }}
    <button @click="copyToClipboard(token)">Copy Token</button>
    <!-- <button @click="push.success('Something good has been pushed!')">Push</button> -->
    <a id="com.pusatgadaiindonesia.gaol" href="com.pusatgadaiindonesia.gaol://"> Open my app </a>
</template>