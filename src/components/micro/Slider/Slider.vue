<template>
    <div id="inputSpace">
        <div class="formatInput">
            <div class="sliderSpace">
                <p>Peso</p>
                <p class="sliderValue">{{ this.weight }}</p>
            </div>
            <input 
            type="range" 
            min="10" 
            max="250" 
            @input="imcSetter" 
            id="weight" />
        </div>
        <div class="formatInput">
            <div class="sliderSpace">
                <p>Altura</p>
                <p class="sliderValue">{{ this.height }}</p>
            </div>
            <input 
            type="range" 
            min="0.50" 
            max="2.50" 
            step="0.01" 
            @input="imcSetter" 
            id="height" />
            <div>
                <Button :calcButton="IMC" />
            </div>
        </div>
        <h2>IMC: {{ imc }} ({{ results }}) </h2>
    </div>
</template>

<script>
import Button from "@/components/micro/Button/Button.vue";
export default {
    /* eslint-disable */ 
    name: "Slider",
    components: {
        Button
    },
    props: {
    },
    data() {
        return {
            weight: "97",
            height: "1.80",
            imc: "29.94",
            results: "Sobrepeso"
        };
    },
    methods: {
        imcSetter() {
            this.weight = document.getElementById("weight").value;
            const getHeight = document.getElementById("height").value;
            this.height = getHeight;
        },
        IMC() {
            let result = this.weight / (this.height * this.height)
            this.imc = result.toFixed(2)
            if (this.imc <= 19) {
                this.results = "Abaixo do Peso";
            } else if (this.imc <= 25) {
                this.results = "Peso Normal";
            } else if (this.imc <= 30) {
                this.results = "Sobrepeso";
            } else if (this.imc <= 35) {
                this.results = "Obesidade Grau I";
            } else if (this.imc <= 40) {
                this.results = "Obesidade Grau II";
            } else if (this.imc > 41) {
                this.results = "Obesidade Mórbida";
            }
        }
    },
};
</script>

<style scoped lang="scss">
@import "./Slider.scss";
</style>