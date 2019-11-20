/*
 * Code created : Nov 20, 2019
 *           By : 8luebottle
 */
const Gce = require('@google-cloud/compute');

const gce = new Gce({
  projectId : 'learning-cloud-demo'
});

const zone = gce.zone('asia-northeast1-b');

console.log('GO! Getting your VMs...');

zone.getVMs().then(data => {
  data[0].forEach(vm => {
    console.log('Found a VM called~!', vm.name);
    console.log('Stopping', vm.name, '...');
    vm.stop((err, operation)=>{
      operation.on('complete', err=>{
        console.log('Stopped', vm.name);
      });
    });
  });
  console.log('Done !?');
});
