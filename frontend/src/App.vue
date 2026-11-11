<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const cases = ref([]);
const error = ref('');
const busy = ref(false);
async function loadCases() {
  try { cases.value = (await axios.get('http://localhost:3000/api/cases')).data; error.value = ''; }
  catch (e) { error.value = e.message; }
}
async function approve(id) {
  busy.value = true;
  try { await axios.patch(`http://localhost:3000/api/cases/${id}/status`, { status: 'APPROVED' }); await loadCases(); }
  catch (e) { error.value = e.response?.data?.message || e.message; }
  finally { busy.value = false; }
}
onMounted(loadCases);
</script>
<template>
  <main>
    <h1>CaseFlow — Case Management</h1>
    <p>Service cases, employee assignments, and approvals</p>
    <p v-if="error" class="error">{{ error }}</p>
    <table><thead><tr><th>Case</th><th>Status</th><th>Assigned employee</th><th>Action</th></tr></thead>
    <tbody><tr v-for="item in cases" :key="item.id">
      <td>{{ item.case_number }}</td><td>{{ item.status }}</td>
      <td>{{ item.assignedEmployeeName || 'Unassigned' }}</td>
      <td><button :disabled="busy || item.status === 'APPROVED'" @click="approve(item.id)">Approve</button></td>
    </tr></tbody></table>
  </main>
</template>
<style>
body{font-family:system-ui,Arial;background:#f5f7fb;color:#18263a;margin:0}main{max-width:900px;margin:60px auto;background:white;padding:32px;border-radius:12px;box-shadow:0 5px 30px #15233a12}table{width:100%;border-collapse:collapse;margin-top:24px}td,th{padding:14px;border-bottom:1px solid #ddd;text-align:left}button{background:#165cba;color:white;border:0;border-radius:6px;padding:9px 15px;cursor:pointer}button:disabled{opacity:.5}.error{color:#a32323}
</style>
