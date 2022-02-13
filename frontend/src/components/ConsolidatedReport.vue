<template>
  <div>
    <body id="page-top">
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Header></Header>
          <div class="container-fluid">
            <b-table striped hover :items="table_body" :fields="table_header">
              <template #cell(tab_url)="data">
                <a :href=data.value>{{ data.value }}</a>
              </template>
              <template #cell(track_time)="data">
                {{ data.item.track_time | toHMS }}
              </template>
            </b-table>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
    </body>
  </div>
</template>

<script>
import Header from './Header.vue';
import SideBar from "./SideBar";
import Footer from "./Footer";
import axios from "axios";

export default {
  title: 'Consolidated Report - Work Report System',
  name: "ConsolidatedReport",
  components: {
    Header,
    SideBar,
    Footer
  },
  props: ['userId', 'reportDate', 'uid'],
  data() {
    return {
      table_header: [
        {
          key: 'tab_domain',
          label: 'URL',
        },
        {
          key: 'track_time',
          label: 'Active time spent',
          sortable: true
        }],
      table_body: []
    }
  },
  methods: {
    getDataByDateAndUserId() {
      axios.get('/consolidatereport', {
        params: {
          report_date: this.reportDate,
          user_id: this.userId,
          uid: this.uid
        }
      })
          .then(response => {
            this.table_body = response.data;
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            // always executed
          });
    }
  },
  filters: {
    toHMS(sec) {
      return new Date(sec * 1000).toISOString().substr(11, 8)
    }
  },
  mounted() {
    this.getDataByDateAndUserId();
  }
}
</script>

<style scoped>

</style>