<template>
    <v-container>
        <v-layout row wrap>
            <v-flex>
                <h1 class="my-2">Contact Us</h1>
                <p>
                    Want to get in touch? Use the details below to get in touch
                </p>
            </v-flex>
            
            <v-flex xs12 class="my-2">
            <v-card>
                <v-card-media
                src="images/contact.jpeg"
                height="300px"
                >
                <v-layout
                    column
                    fill-height
                >
                    <v-spacer></v-spacer>

                    <v-card-title class="white--text pl-5 pt-5">
                    <div class="display-1 pl-5 pt-5 contact">Oscar Kubara</div>
                    </v-card-title>
                </v-layout>
                </v-card-media>

                <v-list two-line>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon color="indigo">phone</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                    <v-list-tile-title>(+263) 78-2041-078</v-list-tile-title>
                    <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                    <v-icon>chat</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon color="indigo">phone</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                    <v-list-tile-title>(+263) 77-4432-520</v-list-tile-title>
                    <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                    <v-icon>chat</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile>
                    <v-list-tile-action>
                    <v-icon color="indigo">mail</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                    <v-list-tile-title>Oscar@needflowholdings.com</v-list-tile-title>
                    <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile>
                    <v-list-tile-action>
                    <v-icon color="indigo">location_on</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                    <v-list-tile-title>1<sup>st</sup> Floor – Clear Horizons, Throgmorton House, 51 Samora Machel Avenue</v-list-tile-title>
                    <v-list-tile-sub-title>Harare</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                </v-list>
            </v-card>
            </v-flex>
  
        </v-layout>
    </v-container>
</template>
<style scoped>
    .contact{
        text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    }
</style>

