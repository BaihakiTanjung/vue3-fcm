<script>
import { inject } from 'vue'

export default {
    //options api
    inject: ['messaging'],
    mounted() {
        console.log('Firebase cloud messaging object', this.$messaging)
    },
    //composition api
    setup() {
        const messaging = inject('messaging')

        console.log('Firebase cloud messaging object', messaging)


        messaging
            .getToken({
                vapidKey:
                    "Your Vapid Key",
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
    }
}
</script>

<template>
    <h1>test fcm</h1>
</template>