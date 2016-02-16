// Compiled by ClojureScript 1.7.228 {}
goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.wait = (function jayq$util$wait(ms,func){
return setTimeout(func, ms);
});
jayq.util.log = (function jayq$util$log(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13183 = arguments.length;
var i__7201__auto___13184 = (0);
while(true){
if((i__7201__auto___13184 < len__7200__auto___13183)){
args__7207__auto__.push((arguments[i__7201__auto___13184]));

var G__13185 = (i__7201__auto___13184 + (1));
i__7201__auto___13184 = G__13185;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return jayq.util.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

jayq.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (v,text){
var vs = ((typeof v === 'string')?cljs.core.apply.call(null,cljs.core.str,v,text):v);
console.log(vs);

return v;
});

jayq.util.log.cljs$lang$maxFixedArity = (1);

jayq.util.log.cljs$lang$applyTo = (function (seq13181){
var G__13182 = cljs.core.first.call(null,seq13181);
var seq13181__$1 = cljs.core.next.call(null,seq13181);
return jayq.util.log.cljs$core$IFn$_invoke$arity$variadic(G__13182,seq13181__$1);
});

//# sourceMappingURL=util.js.map