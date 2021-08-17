import React, { useReducer } from "react";
import _ from "lodash";
import Layout from "../components/layout";
import { Table } from "semantic-ui-react";
import Link from "next/link";

export default function Screener({ data }) {
  let tableData = [
    {
      id: "",
      symbol: "",
      name: "",
      price: null,
      vsUsdOne: null,
      vsUsdTwoFour: null,
      mcap: null,
      volume: null,
      sector: "",
    },
  ];
  tableData = data.data.map((i) => {
    return {
      id: i.id,
      symbol: i.symbol,
      name: i.name,
      price: i.metrics.market_data.price_usd,
      vsUsdOne: i.metrics.market_data.percent_change_usd_last_1_hour,
      vsUsdTwoFour: i.metrics.market_data.percent_change_usd_last_24_hours,
      mcap: i.metrics.marketcap.current_marketcap_usd,
      volume: i.metrics.market_data.real_volume_last_24_hours,
      sector: i.profile.general.overview.sector,
    };
  });
  function screenerReducer(state, action) {
    switch (action.type) {
      case "CHANGE_SORT":
        if (state.column === action.column) {
          return {
            ...state,
            info: state.info.slice().reverse(),
            direction:
              state.direction === "ascending" ? "descending" : "ascending",
          };
        }
        return {
          column: action.column,
          info: _.sortBy(state.info, [action.column]),
          direction: "ascending",
        };
    }
  }

  const [state, dispatch] = useReducer(screenerReducer, {
    column: null,
    info: tableData,
    direction: null,
  });

  const { column, info, direction } = state;
  return (
    <Layout>
      <button
        onClick={() => console.log("im being clicked")}
        style={{ color: "white", fontSize: "5rem", cursor: "pointer" }}
      >
        Click Me
      </button>
      <Table
        sortable
        inverted
        striped
        celled
        fixed
        style={{ background: "black !important" }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "name" ? direction : null}
              // onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
              onClick={() => console.log("im being clicked")}
            >
              NAME
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "price (usd)" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "price (usd)" })
              }
            >
              PRICE (USD)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "change vs usd (1h)" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "change vs usd (1h)" })
              }
            >
              CHANGE VS USD (1H)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "change vs usd (24h)" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "change vs usd (24h)" })
              }
            >
              CHANGE VS USD (24H)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "reported mcap" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "reported mcap" })
              }
            >
              REPORTED MCAP
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "real volume" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "real volume" })
              }
            >
              REAL VOLUME
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "sector" ? direction : null}
              onClick={() =>
                dispatch({ type: "CHANGE_SORT", column: "sector" })
              }
            >
              SECTOR
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {info.map(
            ({
              id,
              symbol,
              name,
              price,
              vsUsdOne,
              vsUsdTwoFour,
              mcap,
              volume,
              sector,
            }) => (
              <Table.Row key={id}>
                <Table.Cell>
                  {name}
                  <br />
                  {symbol}
                </Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell
                  style={vsUsdOne > 0 ? { color: "green" } : { color: "red" }}
                >
                  {vsUsdOne}
                </Table.Cell>
                <Table.Cell
                  style={
                    vsUsdTwoFour > 0 ? { color: "green" } : { color: "red" }
                  }
                >
                  {vsUsdTwoFour}
                </Table.Cell>
                <Table.Cell>{mcap}</Table.Cell>
                <Table.Cell>{volume}</Table.Cell>
                <Table.Cell>{sector}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://data.messari.io/api/v2/assets");
  const data = await res.json();
  return {
    props: { data },
  };
}
