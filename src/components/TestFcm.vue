<script>
import { inject } from 'vue'
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
        // const push = usePush()

        console.log('Firebase cloud messaging object', messaging)

        messaging
            .getToken({
                vapidKey:
                    "BHNRgBUcCtWxBC-T3PMMvrqltP0QlwaiSIvVC2xTzA0ZqsqgZ9GpagxmgwEdDfTpdVxXvU29AqNsUR--GF-ELPY",
            })
            .then((currentToken) => {
                if (currentToken) {
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




        // return {
        //     push
        // }
    }
}
</script>



<template>
    <h1>test fcm</h1>
    <!-- <button @click="push.success('Something good has been pushed!')">Push</button> -->
    <a id="com.pusatgadaiindonesia.gaol" href="com.pusatgadaiindonesia.gaol://"> Open my app </a>
</template>