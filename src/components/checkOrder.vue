<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      支付状态安全
      <div class="button" @click="checkStatus">确认支付</div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog">
      购买失败!
    </this-dialog>
  </div>
</template>
<script>
import thisDialog from '../components/base/dialog.vue';
import axios from 'axios';
export default {
  components: {
    thisDialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number],

    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      axios.post('/checkOrder', {
        orderId: this.orderId 
      })
      .then((res) => {
        this.isShowSuccessDialog = true;
        this.$emit('on-close-check-dialog');
      })
      .catch((err) => {
        this.isShowFailDialog = true;
        this.$emit('on-close-check-dialog');
      });
    },
    orderPay () {

    }
  }
}
</script>
<style>

</style>
