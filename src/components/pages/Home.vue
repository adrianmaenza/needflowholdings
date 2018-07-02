<template>
    <v-container
    >
        <v-layout row wrap class="mb-2">
            <v-flex sm12>
                <h1 class="mb-4">Needflow Holdings</h1>
                <p>
                    Conceptualized in the late 90's, NEEDFLOW HOLDINGS Private Limited is a diversified group of companies with subsidiaries in food, transportation, broadcasting, energy, mining and real estate.
                </p>
                <p>
                    Needflow Foods division strives to control the entire food chain from farming to processing and distribution. We supply all fresh, organic meats including goat, beef, pork, mutton, chicken, fish and game. We strive to offer halal certified meats and have recently diversified to supply processed meats as well as canned meats.
                </p>
                <p>
                    We currently offer services and products for numerous service providers in the region of Zambia and Zimbabwe.
                </p>
            </v-flex>
            <v-flex sm12>
                <h2 class="my-4">Management Profile</h2>
            </v-flex>
            <v-flex v-for="profile in profiles" v-bind:key="profile.index" md6>
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-2">{{ profile.name }}</h3>
                            <div class="preview">{{ profile.about }}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="accent" @click.stop="showProfile(profile.index)">More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-dialog
            v-model="dialog"
            width="500"
            >

            <v-card>
                <v-card-title
                class="white--text headline accent"
                primary-title
                >
                {{ dialogTitle }}
                </v-card-title>

                <v-card-text>
                {{ dialogText }}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="accent"
                    flat
                    @click.stop="dialog = false"
                >
                    Dismiss
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-container>
</template>

<script>

export default {
    data(){
        return {
            dialog: false,
            profiles: [
                {
                    index: 0,
                    name: 'Oscar Kubara',
                    about: `
                        Mr Oscar Kubara is the visionary and an innovative entrepreneur who holds a MSc(Eng) and BSc(Hons) in Control Systems Engineering. A pioneer in his generation, he is the embodiment of true|showProfile African empowerment. 
                        He has over 30years industry experience spanning all levels of administration and management. He is founder and Executive Chairman of Needflow Holdings.
                    `
                },
                {
                    index: 1,
                    name: 'Mr Anesu Kubara',
                    about: `
                        Mr Anesu Kubara is a director who sits on the board of several other regional corporations. He is a firm believer in the positive impact and profitability of valuable relationships and his passion lies solely 
                        on the re-engineering of organizational culture; thus spearheading the evolution of business across Africa. He started his journey with a strong background in computer science and business information systems. 
                        Having worked through the ranks at the leading payroll solution systems provider in Zimbabwe, he noted and emphasized on key value drivers for business success. He has worked as a client support consultant, 
                        software tester, marketer, brand ambassador, award-winning exhibitor (won best stand at ICT Africa 2012, participated at Zimbabwe and Zambia Trade Fair 2013 - 2017) payroll trainer, systems analyst, team builder, 
                        regional business development consultant and strategic partner for SADC. He has worked extensively in regional business development in SADC for over 4 years and has been instrumental to identify opportunities, 
                        mould and sustain key business partnerships with top service providers within the region. Although his customer service background spans over 8 years, he is an applied marketer, strategist and business developer 
                        at heart. He has a wealth of knowledge and experience in client support, information management, conflict resolution, corporate strategy, service delivery, product presentation and differentiation, relational marketing, 
                        reputation management and customer service excellence.
                    `
                }
            ],
            dialogTitle: '',
            dialogText: ''
        }
    },
    methods: {
        showProfile: function (index) {
            this.dialog = true;
            this.dialogTitle = this.profiles[index].name;
            this.dialogText = this.profiles[index].about;
        }
    },
    mounted(){
        const preview = document.getElementsByClassName('preview');
        let i;
        
        for(i = 0; i < preview.length; i++){
            let text = preview[i].innerText;
            preview[i].innerText = text.substring(0, 200) + '...';
        }
    }
}
</script>

