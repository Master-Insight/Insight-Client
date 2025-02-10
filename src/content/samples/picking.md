---
order: 99
title: "Picking Newsport"
description: "Pre Evolución a un sistema de la gestión de control de almacenes y seguimiento de las ventas online desde el momento en que entra el pedido, se solicita la mercadería a los diferentes locales, se recibe y luego se despacha."
service: "spreadsheet"
tags: ["datos"]
staff:
  - "gustavo-sirtori"
images: [
  "/samples/Picking 01.png",
  "/samples/Picking 02.png",
  "/samples/Picking 03.png",
]
active: false
---

# 📃🎁 Picking 🚛🚚
Sistema de Control de Almacenes de ventas online. Esta es una serio de al menos 30 planilla interconectadas entre si para brindar soporte a las ventas web de la empresa.

Como muchos sistemas actuales, las ideas originales se plasman primero en un "excel" y, posteriormente cuando ya no da màs. se pasan a un sistema formal ya con las ideas y conceptos pulidos

Como sucedio en todo el mundo, la ventas online ocupaban poco valor en las empresas hasta que leugo la pandemia cambio todo y las ventas web pasaron a ser una realdiad mas de todos los puntos de ventas minoristas.

A este grupo de empresas le sucedio los mismo. De un dia para otro las ventas online crecieron tanto que tuvieron que adaptarse y a un interesado propuso una mejora en un excel para reemplazar una tarea que se hacia por email, asi nacio el "picking"

Funcion principal:
* El sistema ERP, al recibir una venta genera una lista de mercaderia a pedir a las diferentes sucursales.
* En el excel, se pegan estos "pedidos" y se distribuyen automaticamente a cada local, es decir el local ve la mercaderia que debe enviar a la central.
* la central recibe el pedido, evalua y arma el packete para luego enviarlo registrando el envio
* adicionalmente luego se agregan las planilla de control de devolucions, inversas (packetes que vienen en camino), gestiones de post venta, gestiones de cambio y gestiones de control de fraude

Tomar en cuenta: que toda este gestion se realiza con 20 a 25 locales aproximadamente, lo que aumenta la complejidad