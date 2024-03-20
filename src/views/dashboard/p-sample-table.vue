<template>
  <b-table :items="sampleData" sticky-header responsive :fields="tableFields" hover striped bordered
    table-class="border-box-radius">
  </b-table>
</template>

<script>
export default {
  name: 'p-dashbaord',
  data() {
    return {
      sampleData: [
        {
          cName: 'INWEKA',
          printDate: '17/JAN/2024 13:04',
          analysisDate: '17/JAN/2024 12:49',
          batchNo: 'D',
          sName: 'A',
          uName: 'D',
          pharmacopeia: 'USP',
          assignMethod: '1',
          rpm: '25',
          tilt: 'Off',
          drumType: 'Roche',
          setCounts: '30',
          actualCounts: '30',
          initialWeight: '1.000 gm',
          finalWeight: '0.099 gm',
          friability: '90.10 %',
          leftDrum: 'iNWEKA/ 2065',
          rightDrum: 'iNWEKA/ 2066',
          instrumentId: 'INWEKA1234',
          serialNo: '538011.0922',
          make: 'INWEKA',
          modelNo: 'IN-FT-Pro',
        },
        {
          cName: 'INWEKA',
          printDate: '17/JAN/2024 13:04',
          analysisDate: '17/JAN/2024 12:49',
          batchNo: 'D',
          sName: 'A',
          uName: 'D',
          pharmacopeia: 'USP',
          assignMethod: '1',
          rpm: '25',
          tilt: 'Off',
          drumType: 'Roche',
          setCounts: '30',
          actualCounts: '30',
          initialWeight: '1.000 gm',
          finalWeight: '0.099 gm',
          friability: '90.10 %',
          leftDrum: 'iNWEKA/ 2065',
          rightDrum: 'iNWEKA/ 2066',
          instrumentId: 'INWEKA1234',
          serialNo: '538011.0922',
          make: 'INWEKA',
          modelNo: 'IN-FT-Pro',
        },
        {
          cName: 'INWEKA',
          printDate: '17/JAN/2024 13:04',
          analysisDate: '17/JAN/2024 12:49',
          batchNo: 'D',
          sName: 'A',
          uName: 'D',
          pharmacopeia: 'USP',
          assignMethod: '1',
          rpm: '25',
          tilt: 'Off',
          drumType: 'Roche',
          setCounts: '30',
          actualCounts: '30',
          initialWeight: '1.000 gm',
          finalWeight: '0.099 gm',
          friability: '90.10 %',
          leftDrum: 'iNWEKA/ 2065',
          rightDrum: 'iNWEKA/ 2066',
          instrumentId: 'INWEKA1234',
          serialNo: '538011.0922',
          make: 'INWEKA',
          modelNo: 'IN-FT-Pro',
        },
      ],
    };
  },
  computed: {
    tableFields() {
      return [
        { key: 'cName', label: 'Company' },
        { key: 'printDate', label: 'Print Date' },
        { key: 'analysisDate', label: 'Analysis Date' },
        { key: 'batchNo', label: 'Batch No.' },
        { key: 'sName', label: 'Sample Name' },
        { key: 'uName', label: 'User Name' },
        { key: 'pharmacopeia', label: 'Pharmacopeia' },
        { key: 'assignMethod', label: 'Assign Method No' },
        { key: 'rpm', label: 'RPM' },
        { key: 'tilt', label: 'Tilt @10 Degree' },
        { key: 'drumType', label: 'Drum Type' },
        { key: 'setCounts', label: 'Set Counts' },
        { key: 'actualCounts', label: 'Actual Counts' },
        { key: 'initialWeight', label: 'Initial Weight' },
        { key: 'finalWeight', label: 'Final Weight' },
        { key: 'friability', label: 'Friability' },
        { key: 'leftDrum', label: 'Left Drum Number' },
        { key: 'rightDrum', label: 'Right Drum Number' },
        { key: 'instrumentId', label: 'Instrument ID' },
        { key: 'serialNo', label: 'Serial No.' },
        { key: 'make', label: 'Make' },
        { key: 'modelNo', label: 'Model No.' },
      ];
    },
  },
  methods: {
    changeSidebarWidth() {
      this.minSidebar = !this.minSidebar;
      this.sidebarStyle = {
        width: this.minSidebar ? '4%' : '16%',
      };
    },
  },
};
</script>

<style lang="scss">
.sidebar-css {
  background: #84c9d3;
  position: sticky;
  top: 4rem;
  z-index: 1000;
  height: calc(100vh - 3rem);
  border-radius: 10px;
}

.header-css {
  height: 3rem;
}

.nav-sidebar {
  .nav-link {
    color: #000 !important;
  }
}

.dashboard-cards {
  .custom-card {
    border: 2px solid #000;
    border-radius: 5px;
    background-color: transparent;
  }

  .card-content {
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    padding: 15px;

    &:hover {
      background-color: #d6e6f7;
    }
  }

  .line {
    width: 2px;
    background-color: #000;
    height: 60px;
    border-radius: 5px;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .card-image {
    max-height: 50px;
    max-width: 50px;
    min-width: 50px;
  }
}

.b-table-sticky-header {
  max-height: 700px;

  th {
    min-width: 120px !important;
  }
}
</style>
