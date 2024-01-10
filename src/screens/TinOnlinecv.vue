<template>
  <div class="tin-onlinecv">
    <div class="div-5">
      <Overlap/>
      <OverlapGroup/>
      <OverlapWrapper/>
      <div class="text-wrapper-34">Awards</div>
      <div class="text-wrapper-35">Languages + Tech</div>
      <p class="r-22">Designed With Love by Triet Le</p>
      <div class="r-23">All Rights Reserved</div>
      <p class="r-24">
        35 Moseley St, <br/>
        Dorchester, MA 02325
      </p>
      <div class="r-25">tin.le@gmail.com</div>
      <div class="r-26">(401) 234 - 07369</div>
      <img class="phone" alt="Phone" src="../../static/img/phone.png"/>
      <img class="email" alt="Email" src="../../static/img/email.png"/>
      <img class="location" alt="Location" src="../../static/img/location.png"/>
      <p class="r-27">Southeast Missouri State University Regent’s Scholarship</p>
      <p class="full-tuition">
        Full-tuition academic scholarship awarded by the university.
        <br/>
        2017 – 2021
      </p>
      <img class="language" alt="Language" src="../../static/img/language.png"/>
      <img class="medal" alt="Medal" src="../../static/img/medal.png"/>
      <OverlapGroupWrapper/>
      <DivWrapper/>
      <Div/>
      <SectionComponentNode/>
      <NamecandidateNameOverlapScore10001/>
      <div class="text-wrapper-36">C#</div>
      <div class="text-wrapper-37">Microsoft SQL Server</div>
      <div class="text-wrapper-38">SQL</div>
      <div class="text-wrapper-39">Angular Framework</div>
      <Group/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Div from "./TinOnlinecv/sections/Div.vue";
import DivWrapper from "./TinOnlinecv/sections/DivWrapper.vue";
import Group from "./TinOnlinecv/sections/Group.vue";
import NamecandidateNameOverlapScore10001 from "./TinOnlinecv/sections/NamecandidateNameOverlapScore10001.vue";
import Overlap from "./TinOnlinecv/sections/Overlap.vue";
import OverlapGroup from "./TinOnlinecv/sections/OverlapGroup.vue";
import OverlapGroupWrapper from "./TinOnlinecv/sections/OverlapGroupWrapper.vue";
import OverlapWrapper from "./TinOnlinecv/sections/OverlapWrapper.vue";
import SectionComponentNode from "./TinOnlinecv/sections/SectionComponentNode.vue";

export default defineComponent({
  name: "TinOnlinecv",
  components: {
    Div,
    DivWrapper,
    Group,
    NamecandidateNameOverlapScore10001,
    Overlap,
    OverlapGroup,
    OverlapGroupWrapper,
    OverlapWrapper,
    SectionComponentNode,
  },
});
</script>

<style>
.tin-onlinecv {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.tin-onlinecv .div-5 {
  background-color: #ffffff;
  height: 5345px;
  position: relative;
  width: 1920px;
}

.tin-onlinecv .text-wrapper-34 {
  color: #000000;
  font-family: "EB Garamond", Helvetica;
  font-size: 90px;
  font-weight: 700;
  left: 450px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 3434px;
  width: 387px;
}

.tin-onlinecv .text-wrapper-35 {
  color: #000000;
  font-family: "EB Garamond", Helvetica;
  font-size: 90px;
  font-weight: 700;
  left: 1153px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 3434px;
  width: 728px;
}

.tin-onlinecv .r-22 {
  color: #000000;
  font-family: "Articulat CF-Medium", Helvetica;
  font-size: 31.4px;
  font-weight: 500;
  left: 751px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5159px;
}

.tin-onlinecv .r-23 {
  color: #000000;
  font-family: "Articulat CF-Medium", Helvetica;
  font-size: 31.4px;
  font-weight: 500;
  left: 828px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5116px;
}

.tin-onlinecv .r-24 {
  color: #000000;
  font-family: "Articulat CF-Medium", Helvetica;
  font-size: 35px;
  font-weight: 500;
  left: 194px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 938px;
}

.tin-onlinecv .r-25 {
  color: #000000;
  font-family: "Articulat CF-Medium", Helvetica;
  font-size: 35px;
  font-weight: 500;
  left: 938px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 962px;
}

.tin-onlinecv .r-26 {
  color: #000000;
  font-family: "Articulat CF-Medium", Helvetica;
  font-size: 35px;
  font-weight: 500;
  left: 1555px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 962px;
}

.tin-onlinecv .phone {
  height: 100px;
  left: 1452px;
  object-fit: cover;
  position: absolute;
  top: 929px;
  width: 64px;
}

.tin-onlinecv .email {
  height: 78px;
  left: 792px;
  object-fit: cover;
  position: absolute;
  top: 943px;
  width: 106px;
}

.tin-onlinecv .location {
  height: 101px;
  left: 99px;
  object-fit: cover;
  position: absolute;
  top: 931px;
  width: 53px;
}

.tin-onlinecv .r-27 {
  color: #000000;
  font-family: "Articulat CF-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 449px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 3599px;
  width: 401px;
}

.tin-onlinecv .full-tuition {
  color: #000000;
  font-family: "Articulat CF-Normal", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 449px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 3668px;
  width: 338px;
}

.tin-onlinecv .language {
  height: 88px;
  left: 1015px;
  object-fit: cover;
  position: absolute;
  top: 3464px;
  width: 106px;
}

.tin-onlinecv .medal {
  height: 304px;
  left: 174px;
  object-fit: cover;
  position: absolute;
  top: 3464px;
  width: 196px;
}

.tin-onlinecv .text-wrapper-36 {
  color: #000000;
  font-family: "Articulat CF-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  left: 1652px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 3599px;
  width: 31px;
}

.tin-onlinecv .text-wrapper-37 {
  color: #000000;
  font-family: "Articulat CF-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  left: 1652px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 3738px;
  width: 187px;
}

.tin-onlinecv .text-wrapper-38 {
  color: #000000;
  font-family: "Articulat CF-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  left: 1652px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 3629px;
  width: 51px;
}

.tin-onlinecv .text-wrapper-39 {
  color: #000000;
  font-family: "Articulat CF-Light", Helvetica;
  font-size: 20px;
  font-weight: 300;
  left: 1652px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  top: 3659px;
  width: 175px;
}
</style>