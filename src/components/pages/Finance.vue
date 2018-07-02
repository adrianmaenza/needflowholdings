<template>
    <v-container>
        <v-layout row wrap>
            <v-flex sm12>
                <h1 class="mb-2">Needflow Finace</h1>
                <h2 class="mb-2">Our Identity</h2>
                <p>
                    Needflow Finance Private Limited is a subsidiary of Needflow Holdings Private Limited, based in Zimbabwe. 
                    We operate primarily from Zimbabwe, as an innovative finance and banking company registered and headquartered in 
                    Zimbabwe. Our directorship team synergizes a collective wealth of experience of over 30 years in the ICT services, 
                    Health Delivery, Media, Business Development, Corporate Governance, Taxation and Customer Service industries.
                </p>
                <h2 class="my-2">Our Scope</h2>
                <p>
                    At Needflow Finance we aim to provide an innovative and user-oriented solution that addresses current and 
                    forthcoming continental monetary exchange complexities. As a matter of priority, we are an African Finance house 
                    aiming to revolutionise banking on the African continent. Our thrust is to cater primarily for (but not limited to) 
                    the African mass market and integrate continental needs onto one innovative banking platform. Our long term vision 
                    is to penetrate the platform and related value additional services globally. We aim to be a pioneer of technologically 
                    advanced financial based solutions in Africa, and ultimately become a financial hub that propels Africa into the future.
                </p>
                <h2 class="my-2">Our Strategy</h2>
                <p>
                    Simplicity, Inter-operability, Reliability, Ease of Use and Affordability are our key value drivers. Our services include:
                </p>
                <ul>
                    <li v-for="strategy in strategies" v-bind:key="strategy.index">{{ strategy }}</li>
                </ul>
                <p class="my-4">
                    We bring to our customers a financial service that rides on the technical advances in information, communications and technology 
                    (ICT). In this new frontier, we will usher in the ‘Africa without borders’ era and introduce a new culture in financial and monetary 
                    trade in and beyond Africa.
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            strategies: [
                "Mobile Money Exchange",
                "Cryptocurrency Trading",      
                "Universal Payment Services",
                "Real-time Online Banking Services",
                "Insurance and Investment Banking",
                "Microfinance Facilities",
                "Mortgage Services",
                "Personal  and Corporate Banking Services"
            ]
        }
    }
}
</script>

