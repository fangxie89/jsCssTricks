<template>
  <div>
    <h1>Funny 'nb'</h1>
    <p>([][[]] + [])[+!![]] + ([] + {})[+!![] + +!![]]</p>
    <p>[][[]] => [][''] => undefined</p>
    <p>undefined + [] => undefined + '' => 'undefined'</p>
    <p>[+!![]] => [+1] => [1]</p>
    <p>'undefined'[1] => 'n'</p>
    <p>[] + {} => '' + [Object Object] => '[Object Object]'</p>
    <p>+!![] => 1</p>
    <p>'[Object Object]'[1 + 1] => 'b'</p>
    <p>'n' + 'b' => 'nb'</p>
  </div>
</template>

<script setup>

</script>
